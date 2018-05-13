import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  public validate(database): Array<string> {
    const errors = [];
    const courses = database.ABP_SchuelerFaecher;
    // Deutsch
    const deutschIndex: number = courses.findIndex(element => element.Fach.Bezeichnung === 'Deutsch');
    if (courses[deutschIndex].Kursart_E1 === '' || courses[deutschIndex].Kursart_E2 === '' || courses[deutschIndex].Kursart_Q1 === '' || courses[deutschIndex].Kursart_Q2 === '' || courses[deutschIndex].Kursart_Q3 === '' || courses[deutschIndex].Kursart_Q4 === '') {
      errors.push('Deutsch muss von EF.1 bis Q2.2 belegt werden.');
    }

    for(var i = 0; i < courses.length; i++) {
      if(courses[i].Fach.IstSprache == "J") {
        console.log("Istsprache");
        if(courses[i].Kursart_E1 != "" && courses[i].Kursart_E2 != "" && courses[i].Kursart_Q1 != "" && courses[i].Kursart_Q2 != "" && courses[i].Kursart_Q3 != "" && courses[i].Kursart_Q4 != "") {
          console.log("Gewählt");
          if(parseInt(courses[i].FS_BeginnJg) < 10) {
            console.log("Pre10")
            // Kriterium erfüllt
            break;
          }
          else {
            for(var i = 0; i < courses.length; i++) {
              if(parseInt(courses[i].FS_BeginnJg) < 10) {
                break;
              }
              if(i == courses.length - 1) {
                errors.push("Mindestens eine Fremdsprache muss von EF.1 bis Q2.2 durchgehend belegt werden. Handelt es sich hierbei um eine neu einsetzende Fremdsprache, so muss zusätzlich mindestens eine aus der SI fortgeführte Fremdsprache von EF.1 bis EF.2 belegt werden.");
                break;
              }
            }
          }
        }
        else {
          errors.push("Mindestens eine Fremdsprache muss von EF.1 bis Q2.2 durchgehend belegt werden. Handelt es sich hierbei um eine neu einsetzende Fremdsprache, so muss zusätzlich mindestens eine aus der SI fortgeführte Fremdsprache von EF.1 bis EF.2 belegt werden.");          
          break;
        }
      }
    }

    for(var i = 0; i < courses.length; i++) {
      if(courses[i].Aufgabenfeld == "5" && (courses[i].Kursart_Q1 == "" || courses[i].Kursart_Q2 == "" || courses[i].Kursart_Q3 == "" || courses[i].Kursart_Q4 == "")) {
        errors.push("Mindestens eine Gesellschaftswissenschaft muss von Q1.1 bis Q2.2 durchgehend belegt werden.");
        break;
      }
    }


    console.log(errors);
    return errors;
  }

}
