import {Injectable} from "@angular/core";
import {parse, stringify} from "circular-json";

@Injectable()
export class StorageService {

  constructor() { }

  put(key: string, value: any): void {
    localStorage.setItem(key, stringify(value));
  }

  get(key: string): any {
    return parse(localStorage.getItem(key));
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  remove(key: string): void{
    localStorage.removeItem(key);
  }
}
