export function uniGetTargetElements(el: HTMLElement | ShadowRoot, all?: boolean, selector?: string): Element[] {
  const elements = all
    ? selector
      ? el.querySelectorAll(selector)
      : el.children || []
    : selector
      ? el.querySelector(selector) ? [el.querySelector(selector)] : []
      : el.firstElementChild ? [el.firstElementChild] : [];

  if (!elements || !elements[0]) {
    console.error('No Element target: ' + selector);
    console.warn('For Element', el);
  }

  return Array.from(elements);
}
