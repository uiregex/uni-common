import { uniRemoveClass } from './remove-class';
import { uniAddClass } from './add-class';

export function uniHandleOldClass(el: Element, oldValue: string, newValue: string, prefix = '', suffix = ''): void {
  uniRemoveClass(el, oldValue, prefix, suffix);
  uniAddClass(el, newValue, prefix, suffix);
}
