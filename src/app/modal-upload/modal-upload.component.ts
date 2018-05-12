import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('#modal-upload').modal();
      $('#modal-upload').modal('open');
    });
  }

}
