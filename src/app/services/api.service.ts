import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Weapon} from '../models/Weapon';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ApiPaths} from '../enums/ApiPaths';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  weapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(environment.apiUrl + ApiPaths.Weapons);
  }

  weapon(name: string): Observable<Weapon> {
    return this.http.get<Weapon>(environment.apiUrl + ApiPaths.Weapons + name);
  }
}
