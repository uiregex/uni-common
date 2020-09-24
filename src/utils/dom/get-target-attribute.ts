export function uniGetTargetAttribute(el: HTMLElement, target: string, attribute: string): string {
  const child = el.querySelector(target) || {};

  return child[attribute] || '';
}
