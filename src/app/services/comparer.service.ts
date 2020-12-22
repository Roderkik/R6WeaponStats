import { Injectable } from '@angular/core';
import { WeaponService } from './weapon.service';
import { Weapon } from '../models/Weapon';
import { WeaponParameters } from '../models/WeaponParameters';
import { LocalStorageService, StorageKeys } from './local-storage.service';
import { Observable } from 'rxjs';
import { WeaponFilters } from '../models/WeaponFilters';

@Injectable()
export class ComparerService {
  public parameters: WeaponParameters;
  public filters: WeaponFilters;

  constructor(
    private stats: WeaponService,
    private localStorage: LocalStorageService
  ) {
    this.parameters = this.getStoredParameters();
    this.filters = this.getStoredFilters();
  }

  getWeapons(): Observable<Weapon[]> {
    return this.stats.get();
  }

  getStoredParameters(): WeaponParameters {
    if (!this.localStorage.exists(StorageKeys.WeaponParameters)) {
      this.localStorage.set(
        StorageKeys.WeaponParameters,
        WeaponParameters.default()
      );
    }

    return this.localStorage.get(StorageKeys.WeaponParameters);
  }

  updateStoredParameters(): void {
    this.localStorage.set(StorageKeys.WeaponParameters, this.parameters);
  }

  getStoredFilters(): WeaponFilters {
    if (!this.localStorage.exists(StorageKeys.WeaponFilters)) {
      this.localStorage.set(StorageKeys.WeaponFilters, WeaponFilters.default());
    }

    return this.localStorage.get(StorageKeys.WeaponFilters);
  }

  updateStoredFilters(): void {
    this.localStorage.set(StorageKeys.WeaponFilters, this.filters);
  }
}
