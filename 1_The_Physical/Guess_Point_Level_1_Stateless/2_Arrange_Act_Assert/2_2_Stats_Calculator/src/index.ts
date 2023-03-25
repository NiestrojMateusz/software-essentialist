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
        return this.sortNumsAscending(input)[0]
    }

    private sortNumsAscending(input: number[]) {
        return input.sort((a, b) => a - b)
    }
}
