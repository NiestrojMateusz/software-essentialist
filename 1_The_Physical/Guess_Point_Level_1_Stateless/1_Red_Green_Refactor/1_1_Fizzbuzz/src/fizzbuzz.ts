export const fizzbuzz = (num: number): string => {
  if (num < 1) throw new Error("Too small");
  if (num > 100) throw new Error("Too large");

  return num.toString();
};
