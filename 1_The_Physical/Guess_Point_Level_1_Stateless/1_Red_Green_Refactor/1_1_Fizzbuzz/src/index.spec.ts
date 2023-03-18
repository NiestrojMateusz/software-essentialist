import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return a string", () => {
    const result = fizzbuzz(1);

    expect(typeof result).toBe("string");
  });

  it("should doesnt accept numbers less than 1 such as -1", () => {
    expect(() => fizzbuzz(-1)).toThrow("Too small");
  });

  it("should does not accept numbers over 100", () => {
    expect(() => fizzbuzz(101)).toThrow("Too large");
  });

  it.each([3, 6, 9])(
    "outputs fizz, for mulitples of 3, such as %i",
    (num: number) => {
      expect(fizzbuzz(num)).toBe("fizz");
    }
  );

  it.each([5, 10, 15])(
    "outputs buzz, for mulitples of 5, such as %i",
    (num: number) => {
      expect(fizzbuzz(num)).toBe("buzz");
    }
  );
});
