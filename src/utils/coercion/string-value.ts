import { isJSON } from './is';

export function getStringValue(value: any): any {
  return value === 'true' || value === ''
    ? true
    : value === 'false'
      ? false
      : !isNaN(parseFloat(value))
        ? parseFloat(value)
        : value === 'null'
          ? null
          : isJSON(value)
            ? JSON.parse(value)
            : value;
}
