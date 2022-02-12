export const isDefined = (value: unknown): boolean => typeof value !== 'undefined';

export const isNull = (value: unknown): boolean => value === null;

export const isArray = (value: unknown): boolean => Array.isArray(value);

export const isObject = (value: unknown): boolean => typeof value === 'object' && value !== null && !isArray(value);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

export function isEmptyString(value: any): boolean {
  return isDefined(value) && (isString(value) && value === '');
}

export function isEmpty(value: any): boolean {
  return isDefined(value) && (
    (isArray(value) && value.length === 0)
    || (isObject(value) && Object.keys(value).length === 0)
    || (isString(value) && value === '')
    || isNull(value)
  );
}

export function isJSON(value: any): boolean {
  const optional = `(?:".+"[:].+)?`;
  const regexArray = new RegExp(`^[\\[].*[\\]]$`, 'g');
  const regexObject = new RegExp(`^[{]${optional}[}]$`, 'g');
  const regexArrayObject = new RegExp(`^[\\[][{]${optional}[}][\\]]$`, 'g');

  return isString(value) && (regexObject.test(value) || regexArray.test(value) || regexArrayObject.test(value));
}

export function isBind(value: any, start = '{{', end = '}}'): boolean {
  return isString(value) && value.includes(start) && value.includes(end);
}


// export function isBinding(value, start = '{{', end = '}}'): boolean {
//   return isDefined(value) && isBind(value, start, end);
// }

// export function isNotBinding(value, start = '{{', end = '}}'): boolean {
//   return isDefined(value) && !isBind(value, start, end);
// }

// export function isCleanNotBinding(value, start = '{{', end = '}}'): boolean {
//   return !isDefined(value) || !isBind(value, start, end);
// }

// export function isCleanNotBindings(values, start = '{{', end = '}}'): boolean {
//   return values.every((value) => isCleanNotBinding(value, start, end));
// }
