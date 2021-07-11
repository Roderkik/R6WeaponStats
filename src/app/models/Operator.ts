export class Operator {
  name: string;

  constructor(init?: Partial<Operator>) {
    Object.assign(this, init);
  }
}
