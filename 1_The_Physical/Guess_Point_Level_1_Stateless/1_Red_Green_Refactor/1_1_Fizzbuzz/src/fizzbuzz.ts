export const fizzbuzz = (num: number): string => {
  if (num < 1) throw new Error("Too small");
  if (num > 100) throw new Error("Too large");

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }

  if (num % 5 === 0) {
    return "buzz";
  }

  if (num % 3 === 0) {
    return "fizz";
  }

  return num.toString();
};
