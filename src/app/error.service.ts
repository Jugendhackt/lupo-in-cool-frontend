import { Injectable } from '@angular/core';
import {LupoService} from './lupo.service';

@Injectable()
export class ErrorService {

  constructor(private lupoService: LupoService) { }

  public validate(): Array<string> {
    const courses = this.lupoService.abpDatabase.ABP_SchuelerFaecher;

    return [];
  }
  
}
