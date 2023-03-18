import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it.each(["mom", "wow"])('should be able to tell that "%s" is a palindrome', (word: string) => {
        expect(isPalindrome(word)).toBeTruthy();
    });

    it.each(["bill", "essentialist"])('should be able to tell that "%s" is not a palindrome', (word: string) => {
        expect(isPalindrome(word)).toBeFalsy();
    });


    it.each(["Mom", "mOm", "woW"])('should be able to tell that "%s" is a palindrome when various casing', (word: string) => {
        expect(isPalindrome(word)).toBeTruthy();
    });

    it.each(["Was It A Rat I Saw", "Never Odd or Even"])('should be able to tell that sentences as "%s" is a palindrome', (word: string) => {
        expect(isPalindrome(word)).toBeTruthy();
    });
})