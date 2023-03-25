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
});
