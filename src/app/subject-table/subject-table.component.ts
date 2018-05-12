import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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

  constructor(public lupoService: LupoService, private storageService: StorageService) { }
  subjectCount = 1;

  ngOnInit() {
    $(function () {
      $('select').material_select();
    });
    this.initEventListeners();
  }

  initEventListeners():void {
    for(var i = 0; i < this.subjectCount; i++) {

    }
  }

  onSubjectChoiceChanged(semester:string, objid:string):void {
    let choice = $("#"+objid).val();
    console.log(choice);
  }

  setQ22withABI(abifachno):void {
    console.log(abifachno);
  }

  public persistDatabase() {
    console.log("persist");
    this.storageService.put('adb', this.lupoService.abpDatabase);
  }

  public onChange(schuelerFach: ABPSchuelerFach, property: string, newValue: string) {
    console.log(schuelerFach, property, newValue);
    schuelerFach[property] = newValue;

    this.persistDatabase();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
  }
}
