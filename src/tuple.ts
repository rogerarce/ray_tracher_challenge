/** Vector Class */

export class Tuple {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    public w: number,
  ) {}
}

export class Vector extends Tuple {
  constructor(x: number, y: number, z: number) {
    super(x, y, z, 0);
  }
}

export class Point extends Tuple {
  constructor(x: number, y: number, z: number) {
    super(x, y, z, 1);
  }
}
