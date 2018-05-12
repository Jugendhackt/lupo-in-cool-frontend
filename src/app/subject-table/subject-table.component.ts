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

  ngOnInit() {
    $(function () {
      $('select').material_select();
    });
  }

}
