import { Component, OnInit } from '@angular/core';
import {LupoService} from '../lupo.service';

declare let $: any;

@Component({
  selector: 'app-modal-fehler',
  templateUrl: './modal-fehler.component.html',
  styleUrls: ['./modal-fehler.component.scss']
})
export class ModalFehlerComponent implements OnInit {
  constructor(public lupoService: LupoService) { }
  ngOnInit() {
    $('.modal').modal();
  }

}
