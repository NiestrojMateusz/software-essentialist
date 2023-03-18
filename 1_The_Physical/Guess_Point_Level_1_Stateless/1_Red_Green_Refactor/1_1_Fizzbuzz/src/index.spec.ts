import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return a string", () => {
    const result = fizzbuzz(1);

    expect(typeof result).toBe("string");
  });
});
