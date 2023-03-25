import { StatsCalculator } from ".";

describe("Stats Calculator", () => {
  it('should return the object with stats', () => {
    const statsCalc = new StatsCalculator();

    const result = statsCalc.calculate([1, 2, 3, 5]);

    expect(result).toHaveProperty('minValue')
    expect(result).toHaveProperty('maxValue')
    expect(result).toHaveProperty('elementsInSequence')
    expect(result).toHaveProperty('avg')
  })

  it.each([
      {
        expected: -5,
        numbers: [7, 12, -5, 0, 32, 18],
      },
      {
        expected: -15,
        numbers: [45, 23, -8, -15, 10, 5, 27],
      },
      {
        expected: -10,
        numbers: [15, -10, 30, 20, 9, -7, 42],
      },
    ]
  )
  ("should calculate the minimum value ($expected) of a sequence of integers $numbers", ({expected, numbers}) => {
    const statsCalc = new StatsCalculator();

    const result = statsCalc.calculate(numbers);

    expect(result).toHaveProperty('minValue', expected)
  });
});
