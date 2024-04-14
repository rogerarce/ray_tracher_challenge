/** Vector Class */
export class Tuple {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    public w: number,
  ) {}

  /** @TODO: validate if Vector always has w = 0 and Point always has w = 1; */
  public static of(x: number, y: number, z: number, w: number = 0): Tuple {
    return new Tuple(x, y, z, w);
  }

  public get isVector(): boolean {
    return this.w === 0;
  }

  public get isPoint(): boolean {
    return this.w === 1;
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

  public multiply(v: Tuple): Tuple;
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

  // compute magnitude of vector
  public get length(): number {
    if (!this.isVector) {
      throw new Error("Not a Vector");
    }

    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2);
  }

  public dot(v: Tuple): number {
    if (!this.isVector || !v.isVector) {
      throw new Error("Not a Vector");
    }

    const product = this.multiply(v);

    return product.x + product.y + product.z + product.w;
  }

  /** Turn non-zero magnitude vector into a unit vector (?). */
  public normalize(): Tuple {
    if (!this.isVector) {
      throw new Error("Not a Vector");
    }

    return this.division(this.length);
  }

  public cross(v: Tuple): Tuple {
    if (!this.isVector || !v.isVector) {
      throw new Error("Not a Vector");
    }

    return Tuple.of(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x,
      0,
    );
  }
}
