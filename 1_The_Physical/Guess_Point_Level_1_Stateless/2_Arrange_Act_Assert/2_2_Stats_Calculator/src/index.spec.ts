import { StatsCalculator } from ".";

const exampleSeq1 = [7, 12, -5, 0, 32, 18];
const exampleSeq2 = [45, 23, -8, -15, 10, 5, 27];
const exampleSeq3 = [15, -10, 30, 42];

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
        numbers: exampleSeq1,
      },
      {
        expected: -15,
        numbers: exampleSeq2,
      },
      {
        expected: -10,
        numbers: exampleSeq3,
      },
    ]
  )
  ("should calculate the minimum value ($expected) of a sequence of integers $numbers", ({expected, numbers}) => {
    const statsCalc = new StatsCalculator();

    const result = statsCalc.calculate(numbers);

    expect(result).toHaveProperty('minValue', expected)
  });

  it.each([
      {
        expected: 32,
        numbers: exampleSeq1,
      },
      {
        expected: 45,
        numbers: exampleSeq2,
      },
      {
        expected: 42,
        numbers: exampleSeq3,
      },
    ]
  )
  ("should calculate the maximum value ($expected) of a sequence of integers $numbers", ({expected, numbers}) => {
    const statsCalc = new StatsCalculator();

    const result = statsCalc.calculate(numbers);

    expect(result).toHaveProperty('maxValue', expected)
  });

  it.each([
      {
        expected: 6,
        numbers: exampleSeq1,
      },
      {
        expected: 7,
        numbers: exampleSeq2,
      },
      {
        expected: 4,
        numbers: exampleSeq3,
      },
    ]
  )
  ("should calculate number of elements ($expected) in a sequence of integers $numbers", ({expected, numbers}) => {
    const statsCalc = new StatsCalculator();

    const result = statsCalc.calculate(numbers);

    expect(result).toHaveProperty('elementsInSequence', expected)
  });

  it.each([
      {
        expected: 10.67,
        numbers: exampleSeq1,
      },
      {
        expected: 12.43,
        numbers: exampleSeq2,
      },
      {
        expected: 19.25,
        numbers: exampleSeq3,
      },
    ]
  )
  ("should calculate numbers average ($expected) for a sequence of integers $numbers", ({expected, numbers}) => {
    const statsCalc = new StatsCalculator();

    const result = statsCalc.calculate(numbers);

    expect(result).toHaveProperty('avg', expected)
  });

  it.each([[null, []]])('should throw for wrong input i.e %s', (input) => {
    const statsCalc = new StatsCalculator();

    expect(() => statsCalc.calculate(input as unknown as number[])).toThrow();
  });
});
