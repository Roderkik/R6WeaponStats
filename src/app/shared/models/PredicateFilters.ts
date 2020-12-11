import { WeaponFilters } from './WeaponFilters';

export class PredicateFilters {
  attributes: WeaponFilters;
  search: string;

  constructor(init?: Partial<PredicateFilters>) {
    Object.assign(this, init);
  }
}
