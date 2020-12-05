export class Weapon {
  armorLevel = 1;
  rookPlates = true;
  distance = 10;

  constructor(
    public name: string,
    public RPM: number,
    public damageRanges: number[]) {
  }

  get damage(): number {
    return this.EDamage(3, false, 10);
  }

  get RPS(): number {
    return this.RPM / 60;
  }

  get DPS(): number {
    return this.EDPS(3, false, 10);
  }

  get TTK(): number {
    return this.ETTK(3, false, 10);
  }

  get STK(): number {
    return this.ESTK(3, false, 10);
  }

  /**
   * Gets the damage at a certain distances
   * using the damageRanges array.
   */
  getDamageAtRange(distance: number): number {
    if (distance < 0)
      throw new Error('Range parameter can\'t be less than 0');

    if (distance >= this.damageRanges.length)
      return this.damageRanges[this.damageRanges.length - 1];

    return this.damageRanges[distance];
  }

  /**
   * Calculates the Effective Damage Per Second
   * EDPS = Rounds Per Second * Effective Damage
   */
  EDPS(armorLevel = 1, rookPlates = false, distance = 0): number {
    return this.RPS * this.EDamage(armorLevel, rookPlates, distance);
  }

  /**
   * Calculates the Effective Time To Kill in milliseconds.
   * ETTK = (Effective Shots To Kill - 1) * 60 / Rounds Per Minute * 1000
   */
  ETTK(armorLevel = 1, rookPlates = false, distance = 0): number {
    return (this.ESTK(armorLevel, rookPlates, distance) - 1) * 60 / this.RPM * 1000;
  }

  /**
   * Calculates the Effective Shots To Kill.
   * ESTK = (100 [hp] / Effective Damage) rounded up
   */
  ESTK(armorLevel = 1, rookPlates = false, distance = 0): number {
    return Math.ceil(100 / this.EDamage(armorLevel, rookPlates, distance));
  }

  /**
   * Calculates the Effective Damage
   * EDamage = (Damage At Range * Armor Modifier * Rook Plates Modifier)
   */
  EDamage(armorLevel = 1, rookPlates = false, distance = 0): number {
    let eDamage = this.getDamageAtRange(distance);

    switch (armorLevel) {
      case 2: {
        eDamage = eDamage * .9;
        break;
      }
      case 3: {
        eDamage = eDamage * .8;
        break;
      }
    }

    if (rookPlates === true)
      eDamage = eDamage * 0.8;

    return eDamage;
  }

}
