import { Injectable } from '@angular/core';
import { Weapon } from '../models/Weapon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  private readonly weapons: Observable<Weapon[]>;

  constructor(private http: HttpClient) {
    this.weapons = this.http.get<Weapon[]>('assets/weapons.json');
  }

  get(): Observable<Weapon[]> {
    return this.weapons;
  }
}
