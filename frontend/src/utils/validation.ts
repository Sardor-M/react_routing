export function isEmail(value: string) {
  return value.includes("@");
}
export function isNotEmpty(value: string) {
  return value.trim() !== "";
}

export function hasMinLength(value: string, minLength: number) {
  return value.length >= Number(minLength);
}

export function hasMaxLength(value: string, otherValue: string) {
  return value === otherValue;
}

export function hasInputValuesValidValue(...fields: string[]) {
  return fields.every((field) => field.length > 0 && field.length < 100);
}

export function hasPriceInputValidValue(price: number) {
  return price > 0;
}
