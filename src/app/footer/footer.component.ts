import { Component, OnInit } from '@angular/core';
import {LupoService} from '../lupo.service';
import {calcBindingFlags} from '@angular/core/src/view/util';
declare let $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

constructor(public lupoService: LupoService) { }

  ngOnInit() {
  }

}
