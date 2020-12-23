import { WeaponParameters } from './WeaponParameters';
import { Operator } from './Operator';

export class Weapon {
  public name: string;
  public type: string;
  public action: string;
  public slot: string;
  public RPM: number;
  public damageRanges: number[];

  public usedBy?: Operator[];

  constructor(init?: Partial<Weapon>) {
    Object.assign(this, init);
  }

  get RPS(): number {
    return this.RPM / 60;
  }

  /**
   * Gets the damage at a certain distances
   * using the damageRanges array.
   */
  getDamageAtRange(distance: number): number {
    if (distance < 0)
      throw new Error('Distance parameter can\'t be less than 0');

    if (!Number.isInteger(distance))
      throw new Error('Distance parameter must be an integer');

    if (distance >= this.damageRanges.length)
      return this.damageRanges[this.damageRanges.length - 1];

    return this.damageRanges[distance];
  }

  /**
   * Calculates the Effective Damage Per Second
   * EDPS = Rounds Per Second * Effective Damage
   */
  EDPS(parameters: WeaponParameters): number {
    return this.RPS * this.EDamage(parameters);
  }

  /**
   * Calculates the Effective Time To Kill in milliseconds.
   * ETTK = (Effective Shots To Kill - 1) * 60 / Rounds Per Minute * 1000
   */
  ETTK(parameters: WeaponParameters): number {
    return (((this.ESTK(parameters) - 1) * 60) / this.RPM) * 1000;
  }

  /**
   * Calculates the Effective Shots To Kill.
   * ESTK = (100 [hp] / Effective Damage) rounded up
   */
  ESTK(parameters: WeaponParameters): number {
    return Math.ceil(100 / this.EDamage(parameters));
  }

  /**
   * Calculates the Effective Damage
   * EDamage = (Damage At Range * Armor Modifier * Rook Plates Modifier)
   */
  EDamage(parameters: WeaponParameters): number {
    let eDamage = this.getDamageAtRange(parameters.distance);

    switch (parameters.armorLevel) {
      case 2: {
        eDamage = eDamage * 0.9;
        break;
      }
      case 3: {
        eDamage = eDamage * 0.8;
        break;
      }
    }

    if (parameters.hasRookPlates === true) eDamage = eDamage * 0.8;

    return eDamage;
  }
}
