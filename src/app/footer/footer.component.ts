import { Component, OnInit } from '@angular/core';
import {LupoService} from "../lupo.service";

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
