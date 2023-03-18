export const hasCorrectLength = (input: string, min = 5, max = 15) => {
    return input.length > min && input.length < max;
};



export const passwordValidator = (password: string) => {
    const isLengthValid = hasCorrectLength(password);

    const errors: {
        length?: string;
        missingDigit?: string;
        missingUppercase?: string;
    } = {};

    if (!isLengthValid) {
        errors.length = 'Password should have length between 5 and 15 characters';
    }

    return {
        ...(Object.keys(errors).length ? { errors } : {}),
        result: isLengthValid
    };
}