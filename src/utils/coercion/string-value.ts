import { isJSON } from './is';

export function getStringValue(value: any): any {
  return value === 'true' ? true
    : value === 'false' ? false
      : value === 'null' ? null
        : !isNaN(parseFloat(value)) ? parseFloat(value)
          : isJSON(value) ? JSON.parse(value)
            : value;
}
