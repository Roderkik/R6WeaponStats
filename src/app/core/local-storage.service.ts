import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }
}
