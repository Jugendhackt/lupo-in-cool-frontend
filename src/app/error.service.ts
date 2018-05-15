import { Injectable } from '@angular/core';
import {s} from '@angular/core/src/render3';
declare let Materialize: any;
@Injectable()
export class ErrorService {

  constructor() { }
  public validate(database, oldErrors): Array<string> {
    const errors = [];
    const courses = database.ABP_SchuelerFaecher;
    // Deutsch
    const deutschIndex: number = courses.findIndex(element => element.Fach.Bezeichnung === 'Deutsch');
    if (courses[deutschIndex].Kursart_E1 === '' || courses[deutschIndex].Kursart_E2 === '' || courses[deutschIndex].Kursart_Q1 === '' || courses[deutschIndex].Kursart_Q2 === '' || courses[deutschIndex].Kursart_Q3 === '' || courses[deutschIndex].Kursart_Q4 === '') {
      errors.push('Deutsch muss von EF.1 bis Q2.2 belegt werden.');
    }

    // Mathe
    const matheIndex: number = courses.findIndex(element => element.Fach.Bezeichnung === 'Mathematik');
    if (courses[matheIndex].Kursart_E1 === '' || courses[matheIndex].Kursart_E2 === '' || courses[matheIndex].Kursart_Q1 === '' || courses[matheIndex].Kursart_Q2 === '' || courses[matheIndex].Kursart_Q3 === '' || courses[matheIndex].Kursart_Q4 === '') {
      errors.push('Mathematik muss von EF.1 bis Q2.2 belegt werden.');
    }

    // Sport
    if (database.ABP_Schueler.Sportattest != 'J') {
      const sportIndex: number = courses.findIndex(element => element.Fach.Bezeichnung === 'Sport');
      if (courses[sportIndex].Kursart_E1 === '' || courses[sportIndex].Kursart_E2 === '' || courses[sportIndex].Kursart_Q1 === '' || courses[sportIndex].Kursart_Q2 === '' || courses[sportIndex].Kursart_Q3 === '' || courses[sportIndex].Kursart_Q4 === '') {
        errors.push('Sport muss von EF.1 bis Q2.2 belegt werden.');
      }
    }

    for (let i = 0; i < courses.length; i++) {
      if (courses[i].Fach.IstSprache === 'J') {
        if (courses[i].Kursart_E1 !== '' && courses[i].Kursart_E2 !== '' && courses[i].Kursart_Q1 !== '' && courses[i].Kursart_Q2 !== '' && courses[i].Kursart_Q3 !== '' && courses[i].Kursart_Q4 !== '') {
          if (parseInt(courses[i].FS_BeginnJg) < 10) {
            // Kriterium erfüllt
            break;
          } else {
            for (let i = 0; i < courses.length; i++) {
              if (parseInt(courses[i].FS_BeginnJg) < 10) {
                break;
              }
              if (i === courses.length - 1) {
                errors.push('Mindestens eine Fremdsprache muss von EF.1 bis Q2.2 durchgehend belegt werden. Handelt es sich hierbei um eine neu einsetzende Fremdsprache, so muss zusätzlich mindestens eine aus der SI fortgeführte Fremdsprache von EF.1 bis EF.2 belegt werden.');
                break;
              }
            }
          }
        } else {
          errors.push('Mindestens eine Fremdsprache muss von EF.1 bis Q2.2 durchgehend belegt werden. Handelt es sich hierbei um eine neu einsetzende Fremdsprache, so muss zusätzlich mindestens eine aus der SI fortgeführte Fremdsprache von EF.1 bis EF.2 belegt werden.');
          break;
        }
      }
    }

    let sozIsChosen = false;
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].Aufgabenfeld === '5') {
        if (courses[i].Kursart_Q1 === '' || courses[i].Kursart_Q2 === '' || courses[i].Kursart_Q3 === '' || courses[i].Kursart_Q4 === '') {
        } else {
          sozIsChosen = true;
        }
      }
    }
    if (!sozIsChosen) {
      errors.push('Mindestens eine Gesellschaftswissenschaft muss von Q1.1 bis Q2.2 durchgehend belegt werden.');
    }

    let lkcount = 0;
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].Kursart_Q1 === 'LK' && courses[i].Kursart_Q2 === 'LK' && courses[i].Kursart_Q3 === 'LK' && courses[i].Kursart_Q4 === 'LK') {
        lkcount++;
      }
    }
    if (lkcount !== 2) {
      errors.push('In der Qualifikationsphase müssen zwei Fächer durchgehend in Leistungskursen belegt werden.');
    }
    // 28
    let abiCount = 0;
    courses.forEach((courseEl) => {
      if (courseEl.AbiturFach >= 1 && courseEl.AbiturFach <= 4) {
        abiCount++;
      }
    });
    if (abiCount !== 4) {
      errors.push('Alle Abiturfächer müssen belegt werden.');
    }

    let gkcount = 0;
    for (let i = 0; i < courses.length; i++) {
      if ((courses[i].Kursart_Q1 === 'S' || courses[i].Kursart_Q1 === 'M') && (courses[i].Kursart_Q2 === 'S' || courses[i].Kursart_Q2 === 'M') && (courses[i].Kursart_Q3 === 'S' || courses[i].Kursart_Q3 === 'M') && (courses[i].Kursart_Q4 === 'S' || courses[i].Kursart_Q4 === 'M')) {
        gkcount++;
      }
    }
    if (gkcount < 7) {
      errors.push('In der Qualifikationsphase sind pro Halbjahr mindestens 7 Fächer in Grundkursen zu wählen.');
    }

    console.log((database.ABP_Schueler[0].AnzS_Q1 + database.ABP_Schueler[0].AnzS_Q2 + database.ABP_Schueler[0].AnzS_Q3 + database.ABP_Schueler[0].AnzS_Q4) * 0.25);

    if (((database.ABP_Schueler[0].AnzS_Q1 + database.ABP_Schueler[0].AnzS_Q2 + database.ABP_Schueler[0].AnzS_Q3 + database.ABP_Schueler[0].AnzS_Q4) * 0.25 ) < 34 ) {
      errors.push('Die durchschnittliche Wochenstundenzahl muss in der Qualifikationsphase mindestens 34 Stunden betragen.');
    }

    console.log(errors);
    const newErrors = errors.filter(val => !oldErrors.includes(val));
    newErrors.forEach(function (newError) {
      Materialize.toast(newError, 5000, 'toast-30length');
    });
    return errors;
  }

}
