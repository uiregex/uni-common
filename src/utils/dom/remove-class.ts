export function uniRemoveClass(element: Element, value: string, prefix = '', suffix = ''): void {
  if (value && value !== '') {
    element.classList.remove(`${prefix}${value}${suffix}`);
  }
}
