export const isDefined = (value: unknown): boolean => typeof value !== 'undefined' && value !== null;

export const isArray = (value: unknown): boolean => isDefined(value) && Array.isArray(value);

export const isObject = (value: unknown): boolean => isDefined(value) && typeof value === 'object' && !isArray(value);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isNumber = (value: unknown): value is number => typeof value === "number";

export function isEmpty(value: any): boolean {
  return (Array.isArray(value) && value.length === 0)
    || (isObject(value) && Object.keys(value).length === 0)
    || (isString(value) && value === '');
}

export function isJSON(value: any): boolean {
  const optional = `(".+"[:].+)?`;
  const regexObject = new RegExp(`^[{]${optional}[}]$`, 'g');
  const regexArray = new RegExp(`^[\\[]${optional}[\\]]$`, 'g');
  const regexArrayObject = new RegExp(`^[\\[][{]${optional}[}][\\]]$`, 'g');

  return isString(value) && (regexObject.test(value) || regexArray.test(value) || regexArrayObject.test(value));
}
