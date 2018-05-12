import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LupoService} from "../lupo.service";
import {StorageService} from "../storage.service";
import {ABPSchuelerFach} from "../abp/abpschueler-fach";

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

  ngOnInit() {
    $(function () {
      $('select').material_select();
    });
  }

  public persistDatabase() {
    console.log("persist");
    this.storageService.put('adb', this.lupoService.abpDatabase);
  }

  public onChange(schuelerFach: ABPSchuelerFach, property: string, newValue: string) {
    console.log(property);
    if (property == "Kursart_E1") {  //EF.1 geklickt

    }
    else if (property == "Kursart_E2") {  //EF.2 geklickt

      if (schuelerFach.Kursart_Q2 == "" && schuelerFach.Kursart_Q3 == "" && schuelerFach.Kursart_Q4 == "") {

      }
    }
    else if (property == "Kursart_Q1") {  //Q1.1 geklickt
      if (schuelerFach.Kursart_Q2 == "" && schuelerFach.Kursart_Q3 == "" && schuelerFach.Kursart_Q4 == "") {  //Rest der Q-Phase leer
        if (schuelerFach.Kursart_Q1 == "M") { //Auf Mündlich geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q1;
        }
        else if (schuelerFach.Kursart_Q1 == "S") { //Auf Schriftlich geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q4 = "M";
        }
        else if (schuelerFach.Kursart_Q1 == "ZK") { //Auf Zusatzkurs geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = "";
          schuelerFach.Kursart_Q4 = "";
        }
        if (schuelerFach.Kursart_Q1 == "LK") { //Auf Leistungskurs geändert
          schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
          schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q1;
        }
      }
    }
    else if (property == "Kursart_Q2") {  //Q1.2 geklickt

    }
    else if (property == "Kursart_Q3") {  //Q2.1 geklickt

    }
    else if (property == "Kursart_Q4") {  //Q2.2 geklickt

    }
    else {
      console.warn("Clicked on unknown Property")
    }

    console.log(newValue);
    //schuelerFach[property] = newValue;
    this.lupoService.updateValues();
    this.persistDatabase();
  }
}
