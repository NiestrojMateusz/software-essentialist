export class StatsCalculator {
    calculate(input: number[]) {
        const sortedSequence = this.sortNumsAscending(input);

        return {
            minValue: sortedSequence[0],
            maxValue: sortedSequence[input.length - 1],
            elementsInSequence: input.length,
            avg: this.getNumbersAverage(input)
        }
    }

    private getNumbersAverage(input: number[]) {
        const sum = input.reduce((acc, num) => {
            return acc + num;
        }, 0);

        return parseFloat((sum / input.length).toFixed(2))
    }

    private sortNumsAscending(input: number[]) {
        return input.sort((a, b) => a - b)
    }
}
