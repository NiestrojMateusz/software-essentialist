export class StatsCalculator {
    calculate(input: number[]) {
        return {
            minValue: this.getMinValue(input),
            maxValue: null,
            elementsInSequence: null,
            avg: null
        }
    }

    private getMinValue(input: number[]) {
        return input.sort((a, b) => a - b)[0]
    }
}
