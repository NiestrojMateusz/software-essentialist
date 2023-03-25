import {passwordValidator} from "./index";

describe('password validator', () => {
    const correctPassword = 'PassWithDigit1';
    const tooLongPassword = 'Tncorrectpasssssssssssssssssssss1';
    const tooShortPassword = 'T';
    const missingDigitPassword = 'NoDigitPass';
    const missingUppercasePassword = 'noupperpass1';

    it('should have length between 5 and 15 characters', () => {
        expect(passwordValidator(tooShortPassword).result).toBeFalsy();
        expect(passwordValidator(tooLongPassword).result).toBeFalsy();
        expect(passwordValidator(correctPassword).result).toBeTruthy();
    });

    it('should return an object with invalid length error key', () => {
        expect(passwordValidator(tooLongPassword)).toHaveProperty('errors', {
            length: 'Password should have length between 5 and 15 characters',
        });
    });

    it('should return an object with result true', () => {
        const result = passwordValidator(correctPassword);

        expect(result.result).toBe(true);
    });

    it('should return an object with result false', () => {
        expect(passwordValidator(tooLongPassword)).toHaveProperty('result', false);
    });

    it('should return missingDigit error key for passwords with no digit as "NoDigitPass"', () => {
        expect(passwordValidator(missingDigitPassword)).toHaveProperty('errors', {
            missingDigit: 'Password should have at least one digit',
        });
        expect(passwordValidator(missingDigitPassword)).toHaveProperty('result', false);
    })

    it('should return missingUppercase error key and message for passwords with no uppercase letter as noupperpass1', () => {
        expect(passwordValidator(missingUppercasePassword)).toHaveProperty('errors', {
            missingUppercase: 'Password should have at least one uppercase character',
        });
        expect(passwordValidator(missingUppercasePassword)).toHaveProperty('result', false);
    })
})

