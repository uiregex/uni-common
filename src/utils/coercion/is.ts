export const isDefined = (value: unknown): boolean => typeof value !== 'undefined' && value !== null;
export const isObject = (item: unknown): boolean => isDefined(item) && typeof item === 'object' && !Array.isArray(item);

export function isEmpty(item: any): boolean {
  return (Array.isArray(item) && item.length === 0)
    || (typeof item === 'object' && item.keys().length === 0)
    || (typeof item === 'string' && item === '');
}
