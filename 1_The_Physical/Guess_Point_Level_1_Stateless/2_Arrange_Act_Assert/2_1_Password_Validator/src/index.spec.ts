import {passwordValidator} from "./index";

describe('password validator', () => {
    const correctPassword = 'PassWithDigit1';
    const tooLongPassword = 'Tncorrectpasssssssssssssssssssss1';
    const tooShortPassword = 'T';

    it('should have length between 5 and 15 characters', () => {
        expect(passwordValidator(tooShortPassword)).toBeFalsy();
        expect(passwordValidator(tooLongPassword)).toBeFalsy();
        expect(passwordValidator(correctPassword)).toBeTruthy();
    });
})

