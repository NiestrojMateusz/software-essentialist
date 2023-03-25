export class StatsCalculator {
    calculate(input: number[]) {
        return {
            minValue: this.getMinValue(input),
            maxValue: this.getMaxValue(input),
            elementsInSequence: null,
            avg: null
        }
    }

    private getMinValue(input: number[]) {
        return this.sortNumsAscending(input)[0]
    }

    private getMaxValue(input: number[]) {
        const lastIndex = input.length - 1;
        return this.sortNumsAscending(input)[lastIndex]
    }

    private sortNumsAscending(input: number[]) {
        return input.sort((a, b) => a - b)
    }
}
