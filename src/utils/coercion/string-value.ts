import { isArray, isJSON, isObject } from './is';

export function uniValue(value: any): any {
  return value === 'true' ? true
    : value === 'false' ? false
      : value === 'null' ? null
        : !isNaN(parseFloat(value)) ? parseFloat(value)
          : isJSON(value) ? JSON.parse(value)
            : isObject(value) ? { ...value }
              : isArray(value) ? [...value]
                : value;
}
