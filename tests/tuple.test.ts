import { Tuple } from "../src/tuple";

describe("test instance of vector and point", () => {
  it("create a vector from tuple", () => {
    const vector = Tuple.of(4.3, -4.2, 3.1, 0);

    expect(vector.isVector).toBeTruthy();
  });

  it("should not be an instance of vector", () => {
    const point = Tuple.of(4.3, -4.2, 3.1, 1.0);

    expect(point.isVector).toBeFalsy();
  });

  it("create a point from tuple", () => {
    const point = Tuple.of(4.3, -4.2, 3.1, 1.0);

    expect(point.isPoint).toBeTruthy();
  });

  it("should have w as 0 for Vector", () => {
    const vector = Tuple.of(1, 2, -4, 0);

    expect(vector.w).toEqual(0);
  });

  it("should have w as 1 for Point", () => {
    const point = Tuple.of(1, 2, -4, 1);

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
    const point_1 = Tuple.of(1, 2, 3, 1);
    const point_2 = Tuple.of(3, 2, 1, 1);
    const result = point_1.addTuples(point_2);
    const answer = Tuple.of(4, 4, 4, 2);
    expect(result).toEqual(answer);
    expect(result.isPoint).toBeFalsy();
    expect(result.isVector).toBeFalsy();
  });

  it("should subtract tuples", () => {
    const point_1 = Tuple.of(3, 2, 1, 1);
    const point_2 = Tuple.of(5, 6, 7, 1);

    const result = point_1.subtractTuples(point_2);
    const answer = Tuple.of(-2, -4, -6, 0);
    expect(result).toEqual(answer);
  });

  it("should subtract point with vector", () => {
    const point = Tuple.of(3, 2, 1, 1);
    const vector = Tuple.of(5, 6, 7, 0);

    const result = point.subtractTuples(vector);
    const answer = Tuple.of(-2, -4, -6, 1);
    expect(answer.isPoint).toBeTruthy();
    expect(result).toEqual(answer);
  });

  it("should convert point to vector when subtracting two points", () => {
    const point_1 = Tuple.of(3, 2, 1, 1);
    const point_2 = Tuple.of(5, 6, 7, 1);

    const result = point_1.subtractTuples(point_2);
    const answer = Tuple.of(-2, -4, -6, 0);
    expect(result.isVector).toBeTruthy();
    expect(result).toEqual(answer);
  });

  it("should result to vector when subtracting two vectors", () => {
    const vector_1 = Tuple.of(3, 2, 1, 0);
    const vector_2 = Tuple.of(5, 6, 7, 0);

    const result = vector_1.subtractTuples(vector_2);
    const answer = Tuple.of(-2, -4, -6, 0);
    expect(result.isVector).toBeTruthy();
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

describe("test vector magnitude or length function", () => {
  it("should return the length of given vector", () => {
    const vector = Tuple.of(1, 0, 0, 0);
    const result = vector.length;
    const answer = 1;
    expect(result).toEqual(answer);
  });

  it("should return the length of given vector", () => {
    const vector = Tuple.of(0, 1, 0, 0);
    const result = vector.length;
    const answer = 1;
    expect(result).toEqual(answer);
  });

  it("should return the length of given vector", () => {
    const vector = Tuple.of(0, 0, 1, 0);
    const result = vector.length;
    const answer = 1;
    expect(result).toEqual(answer);
  });

  it("should return the length of given vector", () => {
    const vector = Tuple.of(1, 2, 3, 0);
    const result = vector.length;
    const answer = Math.sqrt(14);
    expect(result).toEqual(answer);
  });

  it("should return the length of given vector", () => {
    const vector = Tuple.of(-1, -2, -3, 0);
    const result = vector.length;
    const answer = Math.sqrt(14);
    expect(result).toEqual(answer);
  });
});

/** @TODO: test unit vector of this vector if = 1; new Vector(10, -2, 14) */
describe("test vector normalize function", () => {
  it("should return normalized version of given vector", () => {
    const vector = Tuple.of(4, 0, 0, 0);
    const result = vector.normalize();
    const answer = Tuple.of(1, 0, 0, 0);
    expect(result).toEqual(answer);
  });

  it("should return normalized version of given vector", () => {
    const vector = Tuple.of(1, 2, 3, 0);
    const result = vector.normalize();
    const magnitude = Math.sqrt(14);
    const answer = Tuple.of(1 / magnitude, 2 / magnitude, 3 / magnitude, 0);
    expect(answer.length).toEqual(1);
    expect(result).toEqual(answer);
  });
});

describe("test dot product of given vectors", () => {
  it("should compute for dot product of given vectors (2)", () => {
    const vector_1 = Tuple.of(1, 2, 3, 0);
    const vector_2 = Tuple.of(2, 3, 4, 0);
    const result = vector_1.dot(vector_2);
    expect(result).toEqual(20);
  });
});

describe("test vector cross operator", () => {
  it("should compute for 2 vectors cross product and returns a new vector", () => {
    const vector_1 = Tuple.of(1, 2, 3, 0);
    const vector_2 = Tuple.of(2, 3, 4, 0);
    const result = vector_1.cross(vector_2);
    const answer = Tuple.of(-1, 2, -1, 0);
    expect(result).toEqual(answer);
  });

  it("should compute for 2 vectors cross product and returns a new vector", () => {
    const vector_1 = Tuple.of(1, 2, 3, 0);
    const vector_2 = Tuple.of(2, 3, 4, 0);
    const result = vector_2.cross(vector_1);
    const answer = Tuple.of(1, -2, 1, 0);
    expect(result).toEqual(answer);
  });
});
