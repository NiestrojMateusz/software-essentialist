const isMultipleOf = (divisor: number) => (num: number) => {
  return num % divisor === 0;
};

const isMultipleOf3 = isMultipleOf(3);
const isMultipleOf5 = isMultipleOf(5);

export const fizzbuzz = (num: number): string => {
  if (num < 1) throw new Error("Too small");
  if (num > 100) throw new Error("Too large");

  if (isMultipleOf3(num) && isMultipleOf5(num)) {
    return "fizzbuzz";
  }

  if (isMultipleOf5(num)) {
    return "buzz";
  }

  if (isMultipleOf3(num)) {
    return "fizz";
  }

  return num.toString();
};
