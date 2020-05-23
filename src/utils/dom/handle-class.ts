export function handleClass(el: Element, value: string, isNew: boolean, prefix = '', suffix = ''): void {
  if (isNew) {
    addClass(el, value, prefix, suffix);
  } else {
    removeClass(el, value, prefix, suffix);
  }
}

export function handleOldClass(el: Element, oldValue: string, newValue: string, prefix = '', suffix = ''): void {
  removeClass(el, oldValue, prefix, suffix);
  addClass(el, newValue, prefix, suffix);
}

export function addClass(element: Element | HTMLElement, value: string, prefix = '', suffix = ''): void {
  if (value && value !== '') {
    element.classList.add(`${prefix}${value}${suffix}`);
  }
}

export function removeClass(element: Element, value: string, prefix = '', suffix = ''): void {
  if (value && value !== '') {
    element.classList.remove(`${prefix}${value}${suffix}`);
  }
}

export function removeClasses(element: Element, ...values: string[]): void {
  element.classList.remove(...values);
}
