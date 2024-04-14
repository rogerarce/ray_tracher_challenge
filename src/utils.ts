/** Test 2 floatingMath point equivalence: If diff is less than EPSILON meaning num1 and num2 are equal */
const equivalence_test = (num1: number, num2: number) => {
  const diff = Math.abs(num1 - num2);

  return diff < Number.EPSILON;
};

export { equivalence_test };
