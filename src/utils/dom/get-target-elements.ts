export function uniGetTargetElements(el: HTMLElement, all?: boolean, selector?: string)
  : NodeListOf<Element> | HTMLCollection | Element[] {
  const elements = all
    ? selector
      ? el.querySelectorAll(selector)
      : el.children
    : selector
      ? [el.querySelector(selector)]
      : [el.firstElementChild];

  if (!elements || !elements[0]) {
    console.error('No Element target: ' + selector);
    console.warn('For Element', el);
  }

  return elements;
}
