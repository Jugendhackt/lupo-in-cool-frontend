import { Injectable } from '@angular/core';
import {LupoService} from './lupo.service';

@Injectable()
export class ErrorService {

  constructor(private lupoService: LupoService) { }

  public validate(): Array<string> {
    const errors = [];
    const courses = this.lupoService.abpDatabase.ABP_SchuelerFaecher;
    // Deutsch
    const deutschIndex: number = courses.findIndex(element => element.Fach.Bezeichnung === 'Deutsch');
    if (courses[deutschIndex].Kursart_E1 === '' || courses[deutschIndex].Kursart_E2 === '' || courses[deutschIndex].Kursart_Q1 === '' || courses[deutschIndex].Kursart_Q2 === '' || courses[deutschIndex].Kursart_Q3 === '' || courses[deutschIndex].Kursart_Q4 === '') {
     errors.push('Deutsch muss von EF.1 bis Q2.2 belegt werden.');
    }
    console.log(errors);
    return errors;
  }

}
