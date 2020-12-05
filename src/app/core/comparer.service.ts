import { Injectable } from '@angular/core';
import { StatsService } from '../stats.service';
import { Weapon } from '../shared/models/Weapon';
import { Parameters } from '../shared/models/Parameters';

@Injectable()
export class ComparerService {
  public parameters: Parameters;

  constructor(private stats: StatsService) {
    this.parameters = {
      armorLevel: 1,
      hasRookPlates: false,
      distance: 0,
    };
  }

  getWeapons(): Weapon[] {
    return this.stats.getWeapons();
  }
}
