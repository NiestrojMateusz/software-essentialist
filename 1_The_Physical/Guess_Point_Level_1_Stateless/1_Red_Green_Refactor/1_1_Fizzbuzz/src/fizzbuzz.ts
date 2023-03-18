export const fizzbuzz = (num: number): string => {
  if (num < 1) throw new Error("Too small");

  return num.toString();
};
