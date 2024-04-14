import { Vector, Point, Tuple } from "../src/tuple";

describe("test instance of vector and point", () => {
  it("create a vector from tuple", () => {
    const vector = Tuple.of(4.3, -4.2, 3.1, 0);

    expect(vector instanceof Vector).toBeTruthy();
  });

  it("should not be an instance of point", () => {
    const vector = Tuple.of(4.3, -4.2, 3.1, 0);

    expect(vector instanceof Point).toBeFalsy();
  });

  it("should not be an instance of vector", () => {
    const point = Tuple.of(4.3, -4.2, 3.1, 1.0);

    expect(point instanceof Vector).toBeFalsy();
  });

  it("create a point from tuple", () => {
    const point = Tuple.of(4.3, -4.2, 3.1, 1.0);

    expect(point instanceof Point).toBeTruthy();
  });

  it("should have w as 0 for Vector", () => {
    const vector = new Vector(1, 2, -4);

    expect(vector.w).toEqual(0);
  });

  it("should have w as 1 for Point", () => {
    const point = new Point(1, 2, -4);

    expect(point.w).toEqual(1);
  });
});

describe("test tuple arithmetic operations", () => {
  it("should add tuples", () => {
    const tuple_1 = Tuple.of(3, -2, 5, 1);
    const tuple_2 = Tuple.of(-2, 3, 1, 0);

    const result = tuple_1.addTuples(tuple_2);
    const answer = Tuple.of(1, 1, 6, 1);
    expect(result).toEqual(answer);
  });

  it("should get a tuple when adding two points", () => {
    const point_1 = new Point(1, 2, 3);
    const point_2 = new Point(3, 2, 1);
    const result = point_1.addTuples(point_2);
    const answer = Tuple.of(4, 4, 4, 2);
    expect(result).toEqual(answer);
    expect(result instanceof Point).toBeFalsy();
    expect(result instanceof Vector).toBeFalsy();
  });

  it("should subtract tuples", () => {
    const point_1 = new Point(3, 2, 1);
    const point_2 = new Point(5, 6, 7);

    const result = point_1.subtractTuples(point_2);
    const answer = Tuple.of(-2, -4, -6, 0);
    expect(result).toEqual(answer);
  });

  it("should subtract point with vector", () => {
    const point = new Point(3, 2, 1);
    const vector = new Vector(5, 6, 7);

    const result = point.subtractTuples(vector);
    const answer = new Point(-2, -4, -6);
    expect(answer instanceof Point).toBeTruthy();
    expect(result).toEqual(answer);
  });

  it("should convert point to vector when subtracting two points", () => {
    const point_1 = new Point(3, 2, 1);
    const point_2 = new Point(5, 6, 7);

    const result = point_1.subtractTuples(point_2);
    const answer = new Vector(-2, -4, -6);
    expect(result instanceof Vector).toBeTruthy();
    expect(result).toEqual(answer);
  });

  it("should result to vector when subtracting two vectors", () => {
    const vector_1 = new Vector(3, 2, 1);
    const vector_2 = new Vector(5, 6, 7);

    const result = vector_1.subtractTuples(vector_2);
    const answer = new Vector(-2, -4, -6);
    expect(result instanceof Vector).toBeTruthy();
    expect(result).toEqual(answer);
  });

  it("should extend values of tuple when multiplies by scalar values", () => {
    const tuple = Tuple.of(1, -2, 3, -4);
    const scalar_value = 3.5;
    const result = tuple.multiply(scalar_value);
    const answer = Tuple.of(3.5, -7, 10.5, -14);
    expect(result).toEqual(answer);
  });

  it("should have tuple division operation", () => {
    const tuple = Tuple.of(1, -2, 3, -4);
    const scalar_value = 2;
    const result = tuple.division(scalar_value);
    const answer = Tuple.of(0.5, -1, 1.5, -2);
    expect(result).toEqual(answer);
  });
});

describe("test negation function", () => {
  it("should result to opposite values of given Tuple", () => {
    const tuple = Tuple.of(1, -2, 3, -4);
    const result = tuple.negate();
    const answer = Tuple.of(-1, 2, -3, 4);
    expect(result).toEqual(answer);
  });
});
