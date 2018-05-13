import {ChangeDetectorRef, Injectable} from '@angular/core';
import axios from 'axios';
import {environment} from '../environments/environment';
import {ABPDatabase} from './abp/abpdatabase';
import {ABPFach} from './abp/abpfach';
import {ABPSchuelerFach} from './abp/abpschueler-fach';
import {ABPFachgruppe} from './abp/abpfachgruppe';
import {StorageService} from './storage.service';
import {ErrorService} from './error.service';

declare let $: any;

@Injectable()
export class LupoService {

  public abpDatabase: ABPDatabase = null;
  public hasData = false;
  public errors: Array<string> = [];

  constructor(private storageService: StorageService, private errorService: ErrorService) {
    if (storageService.has('adb')) {
      this.setDatabase(storageService.get('adb'));
    }
  }

  convertLupoFile(file: File): Promise<ABPDatabase> {
    return new Promise(((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('lupo', file);

      axios.post(environment.backendURL + '/convert/json', formData).then((res) => resolve(res.data as ABPDatabase)).catch(reject);
    }));
  }

  setDatabase(abpDatabase: ABPDatabase): void {
    this.abpDatabase = abpDatabase;

    this.abpDatabase.ABP_SchuelerFaecher = this.abpDatabase.ABP_SchuelerFaecher.map((abpSchuelerFach) => {
      abpSchuelerFach.Fach = this.abpDatabase.ABP_Faecher.find((value) => value.ID === abpSchuelerFach.Fach_ID);
      return abpSchuelerFach;
    });

    this.abpDatabase.ABP_Faecher = this.abpDatabase.ABP_Faecher.map((abpFach) => {
      abpFach.FachGruppe = this.abpDatabase.ABP_Fachgruppen.find((value) => value.Fach === abpFach.FachKrz);

      if (abpFach.FachGruppe) {
        if (abpFach.FachGruppe.Fächer === undefined) {
          abpFach.FachGruppe.Fächer = [];
        }

        abpFach.FachGruppe.Fächer.push(abpFach);
      } else {
        abpFach.FachGruppe = new ABPFachgruppe();
      }
      return abpFach;
    });

    this.hasData = true;
    $('#modal-upload').modal('close');

    this.updateValues();
  }

  public resetDatabase(): void {
    this.storageService.remove('adb');
    this.hasData = false;
    this.abpDatabase = null;
    $('#modal-upload').modal('open');
  }

  private calcValues(faecher, stufe): number {
    let anz = 0;
    faecher.forEach((fach) => {
      if (fach['Kursart_' + stufe] !== '') {
        if (fach.Aufgabenfeld === '10' || fach.Aufgabenfeld === '11') {
          anz += 2;
        } else {
          if (fach['Kursart_' + stufe] === 'M' || fach['Kursart_' + stufe] === 'S' || fach['Kursart_' + stufe] === 'ZK') {
            anz += 3;
          } else {
            anz += 5;
          }
        }
      }
    });
    return anz;
  }

  public updateValues(): void {
    const faecher = this.abpDatabase.ABP_SchuelerFaecher;
    this.abpDatabase.ABP_Schueler[0].AnzS_E1 = this.calcValues(faecher, 'E1');
    this.abpDatabase.ABP_Schueler[0].AnzS_E2 = this.calcValues(faecher, 'E2');
    this.abpDatabase.ABP_Schueler[0].AnzS_Q1 = this.calcValues(faecher, 'Q1');
    this.abpDatabase.ABP_Schueler[0].AnzS_Q2 = this.calcValues(faecher, 'Q2');
    this.abpDatabase.ABP_Schueler[0].AnzS_Q3 = this.calcValues(faecher, 'Q3');
    this.abpDatabase.ABP_Schueler[0].AnzS_Q4 = this.calcValues(faecher, 'Q4');
    this.errors = this.errorService.validate(this.abpDatabase);
  }

  public persistDatabase(): void {
    console.log("persist");
    this.storageService.put('adb', this.abpDatabase);
  }
}
