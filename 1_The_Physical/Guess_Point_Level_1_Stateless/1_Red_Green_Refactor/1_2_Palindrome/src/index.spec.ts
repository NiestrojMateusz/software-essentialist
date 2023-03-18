import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it.each(["mom", "wow"])('should be able to tell that "%s" is a palindrome', (word: string) => {
        expect(isPalindrome(word)).toBeTruthy();
    });
})