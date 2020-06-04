import { isString } from './is';

export function getStringValue(value: any): any {
  return value === 'true' || value === ''
    ? true
    : value === 'false'
      ? false
      : !isNaN(parseFloat(value))
        ? parseFloat(value)
        : value === 'null'
          ? null
          : isString(value) && /[{"].+[":].+["].+["}]/.test(value)
            ? JSON.parse(value)
            : value;
}
