import { Injectable } from '@angular/core';
import { Weapon } from './shared/models/Weapon';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private readonly weapons: Weapon[];

  constructor() {
    this.weapons = [
      new Weapon('R4-C', 860,
        // tslint:disable-next-line:max-line-length
        [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 38, 36, 35, 34, 33, 31, 30, 29, 28, 26, 25]
      ),
      new Weapon('F2', 980,
        // tslint:disable-next-line:max-line-length
        [37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36, 34, 33, 32, 30, 29, 27, 26, 25, 23, 22]
      ),
      new Weapon('PDW9', 800,
        [34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 33, 33, 32, 31, 30, 30, 29, 28, 27, 27, 26]
      ),
      new Weapon('Ots-03', 380,
        // tslint:disable-next-line:max-line-length
        [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 70, 70, 69, 68, 67, 67, 66, 65, 64, 64, 63, 62, 61, 61, 60, 59]
      ),
      new Weapon('AK-74M', 650,
        // tslint:disable-next-line:max-line-length
        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 42, 41, 39, 37, 36, 34, 33, 31, 29, 28, 26, 26, 26, 26, 26, 26, 26, 26]
      ),
      new Weapon('DP-28', 550,
        // tslint:disable-next-line:max-line-length
        [48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48]
      )
    ];
  }

  getWeapons(): Weapon[] {
    return this.weapons.slice();
  }


}
