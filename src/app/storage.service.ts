import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {

  constructor() { }

  put(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  remove(key: string): void{
    localStorage.removeItem(key);
  }
}
