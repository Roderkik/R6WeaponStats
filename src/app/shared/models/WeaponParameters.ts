export class WeaponParameters {
  armorLevel: number;
  hasRookPlates: boolean;
  distance: number;

  constructor(init?: Partial<WeaponParameters>) {
    Object.assign(this, init);
  }

  static default(): WeaponParameters {
    return new WeaponParameters({
      armorLevel: 2,
      hasRookPlates: false,
      distance: 10,
    });
  }
}
