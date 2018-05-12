import { Component, OnInit } from '@angular/core';
import {LupoService} from "../lupo.service";
declare let $: any;
@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  constructor(private lupoService: LupoService) { }
  subjectCount = 1

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
}
