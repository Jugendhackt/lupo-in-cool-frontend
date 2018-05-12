import { Component, OnInit } from '@angular/core';
import { LupoService } from '../lupo.service';

declare let $: any;
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {

  constructor(private lupoService: LupoService) { }

  ngOnInit() {
    console.log(this.lupoService.convertLupoFile);
    $(() => {
      $('#modal-upload').modal()
        .modal('open')
        .change((evt) => {
          const input = <HTMLInputElement>document.getElementById('modal-upload-fileUploadInput');
          if (input.files.length === 1) {
            this.lupoService.convertLupoFile(input.files[0]);
          }
      });
    });
  }

}
