import {Injectable} from '@angular/core';
import axios from 'axios';
import {environment} from '../environments/environment';
import {ABPDatabase} from "./abp/abpdatabase";

declare let $: any;

export class LupoService {

  public abpDatabase: ABPDatabase = null;
  public hasData: boolean = false;

  constructor() {
  }

  convertLupoFile(file: File): Promise<ABPDatabase> {
    return new Promise(((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('lupo', file);

      axios.post(environment.backendURL + '/convert/json', formData).then((res) => resolve(res.data as ABPDatabase)).catch(reject);
    }));
  }

  setDatabase(abpDatabase: ABPDatabase): void {
    this.abpDatabase = abpDatabase;
    this.hasData = true;
    $('#modal-upload').modal('close');
  }
}
