export function uniRemoveClasses(element: Element, ...values: string[]): void {
  element.classList.remove(...values);
}
