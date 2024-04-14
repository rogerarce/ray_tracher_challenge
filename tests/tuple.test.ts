import { Vector, Point } from "../src/tuple";

describe("test instance of vector and point", () => {
  it("should be an instance of vector", () => {
    const vector = new Vector(0, 0, 0);

    expect(vector instanceof Vector).toBeTruthy();
  });

  it("should have w as 0 for Vector", () => {
    const vector = new Vector(1, 2, -4);

    expect(vector.w).toEqual(0);
  });

  it("should be an instance of point", () => {
    const vector = new Point(0, 0, 0);

    expect(vector instanceof Point).toBeTruthy();
  });

  it("should have w as 1 for Point", () => {
    const point = new Point(1, 2, -4);

    expect(point.w).toEqual(1);
  });

  it("should not be an instance of point", () => {
    const vector = new Vector(1, -1, 2);

    expect(vector instanceof Point).toBeFalsy();
  });

  it("should not be an instance of vector", () => {
    const point = new Point(1, -2, 2);

    expect(point instanceof Vector).toBeFalsy();
  });
});
