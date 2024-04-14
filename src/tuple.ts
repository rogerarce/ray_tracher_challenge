/** Vector Class */

export class Tuple {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    public w: number,
  ) {}

  /** @TODO: validate if Vector always has w = 0 and Point always has w = 1; */
  public static of(x: number, y: number, z: number, w: number) {
    if (w == 0) {
      return new Vector(x, y, z);
    } else if (w == 1) {
      return new Point(x, y, z);
    } else {
      return new Tuple(x, y, z, w);
    }
  }

  public addTuples(v: Tuple): Tuple {
    return Tuple.of(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
  }

  public subtractTuples(v: Tuple): Tuple {
    return Tuple.of(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
  }

  public negate() {
    return Tuple.of(this.x * -1, this.y * -1, this.z * -1, this.w * -1);
  }

  public multiply(scalar: number) {
    return Tuple.of(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar,
      this.w * scalar,
    );
  }

  public division(scalar: number) {
    return Tuple.of(
      this.x / scalar,
      this.y / scalar,
      this.z / scalar,
      this.w / scalar,
    );
  }
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
