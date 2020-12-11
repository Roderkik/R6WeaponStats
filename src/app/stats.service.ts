import { Injectable } from '@angular/core';
import { Weapon } from './shared/models/Weapon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private http: HttpClient) {
  }

  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>('assets/weapons.json');
  }
}
