import {Injectable} from '@angular/core';
import axios from 'axios';
import {environment} from '../environments/environment';
import {ABPDatabase} from "./abp/abpdatabase";
import {ABPFach} from "./abp/abpfach";
import {ABPSchuelerFach} from "./abp/abpschueler-fach";
import {ABPFachgruppe} from "./abp/abpfachgruppe";
import {StorageService} from "./storage.service";

declare let $: any;

@Injectable()
export class LupoService {

  public abpDatabase: ABPDatabase = null;
  public hasData: boolean = false;

  constructor(private storageService: StorageService) {
    if (storageService.has('adb')) {
      this.setDatabase(storageService.get('adb'));
    }
  }

  convertLupoFile(file: File): Promise<ABPDatabase> {
    return new Promise(((resolve, reject) => {
      let fileReader = new FileReader();
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
        if (abpFach.FachGruppe.Fächer === undefined)
          abpFach.FachGruppe.Fächer = [];

        abpFach.FachGruppe.Fächer.push(abpFach);
      } else {
        abpFach.FachGruppe = new ABPFachgruppe();
      }
      return abpFach;
    });

    this.hasData = true;
    $('#modal-upload').modal('close');
  }

  public resetDatabase(): void {
    this.storageService.remove('adb');
    this.hasData = false;
    this.abpDatabase = null;
    $('#modal-upload').modal('open');
  }

  public updateValues(): void {

  }
}
