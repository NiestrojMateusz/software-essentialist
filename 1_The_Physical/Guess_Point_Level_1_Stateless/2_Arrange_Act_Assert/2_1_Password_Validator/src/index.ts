export const hasCorrectLength = (input: string, min = 5, max = 15) => {
    return input.length > min && input.length < max;
};

export const hasDigit = (input: string) => {
    return Boolean(input.match(/[0-9]/));
};

export const hasUppercaseLetter = (input: string) => {
    return Boolean(input.match(/[A-Z]/));
};


export const passwordValidator = (password: string) => {
    const isLengthValid = hasCorrectLength(password);
    const isRequiredDigit = hasDigit(password);
    const isCaseValid = hasUppercaseLetter(password);

    const errors: {
        length?: string;
        missingDigit?: string;
        missingUppercase?: string;
    } = {};

    if (!isLengthValid) {
        errors.length = 'Password should have length between 5 and 15 characters';
    }

    if (!isRequiredDigit) {
        errors.missingDigit = 'Password should have at least one digit';
    }

    if (!isCaseValid) {
        errors.missingUppercase =
            'Password should have at least one uppercase character';
    }

    return {
        ...(Object.keys(errors).length ? { errors } : {}),
        result: isLengthValid && isRequiredDigit && isCaseValid
    };
}