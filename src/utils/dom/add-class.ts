export function uniAddClass(element: Element | HTMLElement, value: string, prefix = '', suffix = ''): void {
  if (value && value !== '') {
    element.classList.add(`${prefix}${value}${suffix}`);
  }
}
