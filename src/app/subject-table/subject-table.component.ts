import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('select').material_select();
    });
  }

}
