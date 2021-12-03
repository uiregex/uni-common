import { isDefined } from '../coercion/is';

export function uniClearContent(el: HTMLElement): void {
  if (isDefined(el)) {
    el.textContent = '';
  }
}
