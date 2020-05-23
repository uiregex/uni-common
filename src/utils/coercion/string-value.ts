export function getStringValue(value: any): boolean | number | string {
  return value === 'true' || value === ''
    ? true
    : value === 'false'
      ? false
      : !isNaN(parseFloat(value))
        ? parseFloat(value)
        : value === 'null'
          ? null
          : value;
}
