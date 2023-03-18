export const isPalindrome = (input: string): boolean => {
    const reversed = input.split('').reverse().join('');

    return reversed.toLowerCase() === input.toLowerCase();
}