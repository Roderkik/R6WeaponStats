import {Injectable} from '@angular/core';

export enum StorageKeys {
  WeaponParameters = 'weaponParameters',
  WeaponFilters = 'weaponFilters',
}

@Injectable({
  providedIn: 'root',
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

  exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
