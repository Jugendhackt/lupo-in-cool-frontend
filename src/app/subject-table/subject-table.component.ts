import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LupoService} from '../lupo.service';
import {StorageService} from '../storage.service';
import {ABPSchuelerFach} from '../abp/abpschueler-fach';

declare let $: any;

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  constructor(private lupoService: LupoService, private storageService: StorageService, private cdRef: ChangeDetectorRef) {
  }

  subjectCount = 1;
  public abiFachBesetzt: any;
  public tempAbi;


  ngOnInit() {
    $(function () {
      $('select').material_select();
    });
    document.title = this.lupoService.abpDatabase.ABP_Schuldaten[0].Bezeichnung1 + " - Lupo in cool"
    // this.abiFachBesetzt = [{'place': null, 'isSet': false}, {'place': null, 'isSet': false}, {'place': null, 'isSet': false}, {'place': null, 'isSet': false}];
  }

  public persistDatabase() {
    this.lupoService.persistDatabase();
  }

  public onChange(schuelerFach: ABPSchuelerFach, property: string, newValue: string) {
    console.log(property);

    // Testen, ob Autofill angewendet werden kann

    if (property == 'Kursart_E1') {  //EF.1 geklickt
      if (schuelerFach.Kursart_E2 == '') {
        schuelerFach.Kursart_E2 = schuelerFach.Kursart_E1;
      }
    } else if (property == 'Kursart_E2') {  //EF.2 geklickt

    } else if (property == 'Kursart_Q1') {  //Q1.1 geklickt
      if ((schuelerFach.Kursart_Q2 == '' && schuelerFach.Kursart_Q3 == '' && schuelerFach.Kursart_Q4 == '') || (schuelerFach.Kursart_Q2 && schuelerFach.Kursart_Q3)) {  //Rest der Q-Phase leer
        if (schuelerFach.Kursart_Q1 == 'M') { //Auf Mündlich geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q1;
        } else if (schuelerFach.Kursart_Q1 == 'S') { //Auf Schriftlich geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q4 = 'M';
        } else if (schuelerFach.Kursart_Q1 == 'ZK') { //Auf Zusatzkurs geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = '';
          schuelerFach.Kursart_Q4 = '';
        } else if (schuelerFach.Kursart_Q1 == 'LK') { //Auf Leistungskurs geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q1;
        } else if (schuelerFach.Kursart_Q1 == '') { //Auf Leistungskurs geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q1;
        }
      } else if (schuelerFach.Kursart_Q2 == '' && (schuelerFach.Kursart_Q3 != '' || schuelerFach.Kursart_Q4 != '')) {
        schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
      }
    } else if (property == 'Kursart_Q2') {  //Q1.2 geklickt

    } else if (property == 'Kursart_Q3') {  //Q2.1 geklickt
      if (schuelerFach.Kursart_Q3 == 'S') {
        schuelerFach.Kursart_Q4 = 'M';
      } else {
        schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q3;
      }

      if (schuelerFach.Kursart_Q4 == '') {
      }
    } else if (property == 'Kursart_Q4') {  //Q2.2 geklickt

    } else if (property == 'AbiturFach') {
      if (schuelerFach.AbiturFach == 1 || schuelerFach.AbiturFach == 2) {
        schuelerFach.Kursart_Q1 = 'LK';
        schuelerFach.Kursart_Q2 = 'LK';
        schuelerFach.Kursart_Q3 = 'LK';
        schuelerFach.Kursart_Q4 = 'LK';
      } else if (schuelerFach.AbiturFach == 3) {
        schuelerFach.Kursart_Q1 = 'S';
        schuelerFach.Kursart_Q2 = 'S';
        schuelerFach.Kursart_Q3 = 'S';
        schuelerFach.Kursart_Q4 = 'S';
      } else if (schuelerFach.AbiturFach == 4) {
        schuelerFach.Kursart_Q1 = 'S';
        schuelerFach.Kursart_Q2 = 'S';
        schuelerFach.Kursart_Q3 = 'S';
        schuelerFach.Kursart_Q4 = 'M';
      } else {
        schuelerFach.Kursart_Q4 = 'M';
        if (schuelerFach.Kursart_Q1 == 'LK') {
          schuelerFach.Kursart_Q1 = 'S';
          schuelerFach.Kursart_Q2 = 'S';
          schuelerFach.Kursart_Q3 = 'S';
        }
      }

      this.tempAbi = schuelerFach.AbiturFach;
      for (let i = 0; i < this.lupoService.abpDatabase.ABP_SchuelerFaecher.length; i++) {
        const currFach = this.lupoService.abpDatabase.ABP_SchuelerFaecher[i];
        if (currFach.AbiturFach == this.tempAbi) {
          console.log(currFach.AbiturFach);
          currFach.AbiturFach = null;
          if (currFach.Kursart_Q4 == 'LK' || currFach.Kursart_Q4 == 'S') {
            currFach.Kursart_Q1 = 'S';
            currFach.Kursart_Q2 = 'S';
            currFach.Kursart_Q3 = 'S';
            currFach.Kursart_Q4 = 'M';
          }
        } else {

        }
      }
      schuelerFach.AbiturFach = this.tempAbi;
      if (schuelerFach.AbiturFach == 1 || schuelerFach.AbiturFach == 2) {
        schuelerFach.Kursart_Q1 = 'LK';
        schuelerFach.Kursart_Q2 = 'LK';
        schuelerFach.Kursart_Q3 = 'LK';
        schuelerFach.Kursart_Q4 = 'LK';
      } else if (schuelerFach.AbiturFach == 3) {
        schuelerFach.Kursart_Q1 = 'S';
        schuelerFach.Kursart_Q2 = 'S';
        schuelerFach.Kursart_Q3 = 'S';
        schuelerFach.Kursart_Q4 = 'S';
      }
    } else {
      console.warn('Clicked on unknown Property');
    }

    //Testen der Abitur-Kriterien
    // this.abiFachBesetzt = [{"place": null}, {"place": null}, {"place": null}, {"place": null}];
    // this.lupoService.abpDatabase.ABP_SchuelerFaecher.forEach((globalSchuelerFach) => {
    //   if (globalSchuelerFach.AbiturFach >= 1 && globalSchuelerFach.AbiturFach <= 4) {
    //     if (this.abiFachBesetzt[globalSchuelerFach.AbiturFach - 1].isset == false || this.abiFachBesetzt[globalSchuelerFach.AbiturFach - 1].isset ==  undefined){
    //       const besetzt = this.abiFachBesetzt[globalSchuelerFach.AbiturFach - 1];
    //       besetzt.isset = true;
    //       besetzt.place = globalSchuelerFach;
    //     }
    //     else {
          
    //     }
    //   }
    // })

    // console.log(this.abiFachBesetzt);


    //schuelerFach[property] = newValue;
    this.lupoService.updateValues();
    this.persistDatabase();
  }
}
