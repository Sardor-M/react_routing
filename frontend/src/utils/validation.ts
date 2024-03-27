export function isEmail(value: string) {
    return value.includes("@");
}
export function isNotEmpty(value: string) {
    return value.trim() !== "";
}

export function hasMinLength(value: string,  minLength: string) {
    return value.length >= Number( minLength);
}

export function hasMaxLength(value: string, otherValue: string) {
    return value === otherValue;
}

