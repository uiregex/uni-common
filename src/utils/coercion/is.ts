import { uniGetValue } from './get-value';

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
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }

  return isString(value);
}

export function isNestedData(value: any): boolean {
  return isArray(value) || isObject(value);
}

export function uniIsEqual(state: any, value: any): boolean {
  return isNestedData(state)
    ? JSON.stringify(state) === (isNestedData(value) ? JSON.stringify(value) : value)
    : uniGetValue(state) === uniGetValue(value);
}

export function uniStringifyEqual(value: string, equal: any): boolean {
  return isNestedData(value) ? JSON.stringify(value) === equal : value === uniGetValue(equal);
}

export function uniStringifyNoEqual(value: any, noEqual: string): boolean {
  return isNestedData(value) ? JSON.stringify(value) !== noEqual : value !== uniGetValue(noEqual);
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
