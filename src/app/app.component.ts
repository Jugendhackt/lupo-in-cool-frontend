import { Component } from '@angular/core';
import {LupoService} from "./lupo.service";
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private lupoService: LupoService) {}
}
