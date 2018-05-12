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
export class SubjectTableComponent implements OnInit, OnChanges {

  constructor(private lupoService: LupoService, private storageService: StorageService, private cdRef: ChangeDetectorRef) { }
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
    console.log(schuelerFach, property, newValue);

    //Check for autocomplete
    if(this.qLineEmpty(property, schuelerFach)) {
      if(schuelerFach.Kursart_Q1 == "M"){
        schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
        schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
        schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q1;
      }
      else if(schuelerFach.Kursart_Q1 == "S"){
        schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
        schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
        schuelerFach.Kursart_Q4 = "M";
      }
      else if(schuelerFach.Kursart_Q1 == "ZK"){
        schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
        schuelerFach.Kursart_Q3 = "";
        schuelerFach.Kursart_Q4 = "";
      }
      if(schuelerFach.Kursart_Q1 == "LK"){
        schuelerFach.Kursart_Q2 = schuelerFach.Kursart_Q1;
        schuelerFach.Kursart_Q3 = schuelerFach.Kursart_Q1;
        schuelerFach.Kursart_Q4 = schuelerFach.Kursart_Q1;
      }
    }

    console.log(newValue);
    //schuelerFach[property] = newValue;
    this.lupoService.updateValues();
    this.persistDatabase();
  }

  qLineEmpty(line: string, schuelerFach: any): boolean {
    if(schuelerFach.Kursart_Q2 == "" && schuelerFach.Kursart_Q3 == "" && schuelerFach.Kursart_Q4 == "") {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
  }
}
