import { isArray, isJSON, isObject } from './is';
import { isNumberValue } from './number';

export function uniGetValue(value: any): any {
  return value === 'true' ? true
    : value === 'false' ? false
      : value === 'null' ? null
        : isNumberValue(value) ? Number(value)
          : isJSON(value) ? JSON.parse(value)
            : isObject(value) ? { ...value }
              : isArray(value) ? [...value]
                : value;
}
