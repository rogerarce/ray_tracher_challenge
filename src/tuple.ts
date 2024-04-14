/** Vector Class */

export class Tuple {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    public w: number,
  ) {}

  /** @TODO: validate if Vector always has w = 0 and Point always has w = 1; */
  public static of(x: number, y: number, z: number, w: number): Tuple {
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

  public multiply(v: Vector): Tuple;
  public multiply(scalar: number): Tuple;
  public multiply(arg: any): Tuple {
    if (typeof arg === "number") {
      return Tuple.of(this.x * arg, this.y * arg, this.z * arg, this.w * arg);
    } else {
      return Tuple.of(
        this.x * arg.x,
        this.y * arg.y,
        this.z * arg.z,
        this.w * arg.w,
      );
    }
  }

  public division(scalar: number): Tuple {
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

  // compute magnitude of vector
  public get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2);
  }

  /** Turn non-zero magnitude vector into a unit vector (?). */
  public normalize(): Tuple {
    return this.division(this.length);
  }

  public dot(v: Vector): number {
    const product = this.multiply(v);

    return product.x + product.y + product.z + product.w;
  }

  public cross(v: Vector): Vector {
    return new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x,
    );
  }
}

export class Point extends Tuple {
  constructor(x: number, y: number, z: number) {
    super(x, y, z, 1);
  }
}
