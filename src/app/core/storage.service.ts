import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }
}
