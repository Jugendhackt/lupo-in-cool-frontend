import {Injectable} from '@angular/core';
import axios from 'axios';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: "root"
})
export class LupoService {

  constructor() {
  }

  convertLupoFile(file: File): void {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('lupo', file);

    axios.post(environment.backendURL + '/convert/json', formData).then((res) => {
      console.log(res);
    });
  }
}
