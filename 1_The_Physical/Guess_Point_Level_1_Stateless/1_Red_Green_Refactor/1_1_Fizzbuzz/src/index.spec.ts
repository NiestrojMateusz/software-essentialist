import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return a string", () => {
    const result = fizzbuzz(1);

    expect(typeof result).toBe("string");
  });

  it("should doesnt accept numbers less than 1 such as -1", () => {
    expect(() => fizzbuzz(-1)).toThrow("Too small");
  });
});
