import {Injectable} from '@angular/core';
import axios from 'axios';
import {environment} from '../environments/environment';
import {ABPDatabase} from "./abp/abpdatabase";

@Injectable({
  providedIn: "root"
})
export class LupoService {

  public abpDatabase: ABPDatabase = null;

  constructor() {
  }

  convertLupoFile(file: File): Promise<ABPDatabase> {
    return new Promise(((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('lupo', file);

      return axios.post(environment.backendURL + '/convert/json', formData).then((res) => res.data as ABPDatabase) as Promise<ABPDatabase>;
    }));
  }

  setDatabase(abpDatabase: ABPDatabase): void {
    this.abpDatabase = abpDatabase;
  }
}
