import {Injectable} from '@angular/core';
import {Weapon} from '../models/Weapon';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  constructor(private api: ApiService) {
  }

  all(): Observable<Weapon[]> {
    return this.api.weapons();
  }

  get(name: string): Observable<Weapon> {
    return this.api.weapon(name);
  }
}
