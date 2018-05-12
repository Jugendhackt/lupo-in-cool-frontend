import { Component, OnInit } from '@angular/core';
import {LupoService} from '../lupo.service';
declare let $: any;
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
        if (fach.Aufgabenfeld === '10' || fach.Aufgabenfeld === '11') {
          anzE1 += 2;
        } else {
          anzE1 += 3;
        }
      }
      if (fach.Kursart_E2 !== '') {
        if (fach.Aufgabenfeld === '10' || fach.Aufgabenfeld === '11') {
          anzE2 += 2;
        } else {
          anzE2 += 3;
        }
      }
      if (fach.Kursart_Q1 !== '') {
        if (fach.Aufgabenfeld === '10' || fach.Aufgabenfeld === '11') {
          anzQ1 += 2;
        } else {
          if (fach.Kursart_Q1 === 'M' || fach.Kursart_Q1 === 'S') {
            anzQ1 += 3;
          } else {
            anzQ1 += 5;
          }
        }
      }
      if (fach.Kursart_Q2 !== '') {
        if (fach.Aufgabenfeld === '10' || fach.Aufgabenfeld === '11') {
          anzQ2 += 2;
        } else {
          if (fach.Kursart_Q2 === 'M' || fach.Kursart_Q2 === 'S') {
            anzQ2 += 3;
          } else {
            anzQ2 += 5;
          }
        }
      }
      if (fach.Kursart_Q3 !== '') {
        if (fach.Aufgabenfeld === '10' || fach.Aufgabenfeld === '11') {
          anzQ3 += 2;
        } else {
          if (fach.Kursart_Q3 === 'M' || fach.Kursart_Q3 === 'S' || fach.Kursart_Q3 === 'ZK') {
            anzQ3 += 3;
          } else {
            anzQ3 += 5;
          }
        }
      }
      if (fach.Kursart_Q4 !== '') {
        if (fach.Aufgabenfeld === '10' || fach.Aufgabenfeld === '11') {
          anzQ4 += 2;
        } else {
          if (fach.Kursart_Q4 === 'M' || fach.Kursart_Q4 === 'S' || fach.Kursart_Q4 === 'ZK') {
            anzQ4 += 3;
          } else {
            anzQ4 += 5;
          }
        }
      }
    });

    // if (anzE1 < 28) {
    //   $('#footer-stunden-row').append('<td style="background-color:#b71c1c;" text-align: center" width="9.9%">' + anzE1 + '</td>');
    // } else if (anzE1 < 31) {
    //   $('#footer-stunden-row').append('<td style="background-color:#bf360c;" text-align: center" width="9.9%">' + anzE1 + '</td>');
    // }
    // $('#footer-stunden-row').append('<td style="text-align: center; border-right: 2px solid #d5d5d5" width="9.9%">' + anzE2 + '</td>');
    // $('#footer-stunden-row').append('<td style="text-align: center" width="9.9%">' + anzQ1 + '</td>');
    // $('#footer-stunden-row').append('<td style="text-align: center" width="9.9%">' + anzQ2 + '</td>');
    // $('#footer-stunden-row').append('<td style="text-align: center" width="9.9%">' + anzQ3 + '</td>');
    // $('#footer-stunden-row').append('<td style="text-align: center; border-right: 2px solid #d5d5d5" width="9.9%">' + anzQ4 + '</td>');
    // $('#footer-stunden-row').append('<td></td>');
  }

}
