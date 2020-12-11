export class WeaponFilters {
  types: string[];
  actions: string[];
  slots: string[];

  constructor(init?: Partial<WeaponFilters>) {
    Object.assign(this, init);
  }

  static default(): WeaponFilters {
    return new WeaponFilters({
      types: ['Sniper', 'AR', 'Handgun', 'Shotgun', 'SMG', 'DMR', 'LMG'],
      actions: ['Auto', 'Semi'],
      slots: ['Primary', 'Sidearm'],
    });
  }
}
