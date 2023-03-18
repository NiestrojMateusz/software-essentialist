export const hasCorrectLength = (input: string, min = 5, max = 15) => {
    return input.length > min && input.length < max;
};



export const passwordValidator = (password: string) => {
    const isLengthValid = hasCorrectLength(password);

    return isLengthValid;
}