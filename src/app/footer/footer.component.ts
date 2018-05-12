import { Component, OnInit } from '@angular/core';
import {LupoService} from '../lupo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private lupoService: LupoService) { }

  ngOnInit() {
    let anzE1 = 0;
    let anzE2 = 0;
    let anzQ1 = 0;
    let anzQ2 = 0;
    let anzQ3 = 0;
    let anzQ4 = 0;
    const faecher = this.lupoService.abpDatabase.ABP_SchuelerFaecher;
    faecher.forEach(function (fach) {
      if (fach.Kursart_E1 !== '') {
        anzE1 += 3;
      }
      if (fach.Kursart_E2 !== '') {
        anzE2 += 3;
      }
      if (fach.Kursart_Q1 !== '') {
        if (fach.Kursart_Q1 === 'M' || fach.Kursart_Q1 === 'S') {
          anzQ1 += 3;
        } else {
          anzQ1 += 5;
        }
      }
      if (fach.Kursart_Q2 !== '') {
        if (fach.Kursart_Q2 === 'M' || fach.Kursart_Q2 === 'S') {
          anzQ1 += 3;
        } else {
          anzQ1 += 5;
        }
      }
      if (fach.Kursart_Q3 !== '') {
        if (fach.Kursart_Q3 === 'M' || fach.Kursart_Q3 === 'S') {
          anzQ1 += 3;
        } else {
          anzQ1 += 5;
        }
      }
      if (fach.Kursart_Q4 !== '') {
        if (fach.Kursart_Q4 === 'M' || fach.Kursart_Q4 === 'S') {
          anzQ1 += 3;
        } else {
          anzQ1 += 5;
        }
      }
    });
  }

}
