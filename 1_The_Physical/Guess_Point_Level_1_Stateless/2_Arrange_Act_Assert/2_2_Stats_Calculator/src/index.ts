export class StatsCalculator {
    calculate(input: number[]) {
        const sortedSequence = this.sortNumsAscending(input);

        return {
            minValue: sortedSequence[0],
            maxValue: sortedSequence[input.length - 1],
            elementsInSequence: input.length,
            avg: null
        }
    }

    private sortNumsAscending(input: number[]) {
        return input.sort((a, b) => a - b)
    }
}
