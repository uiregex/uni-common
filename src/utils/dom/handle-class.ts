import { uniAddClass } from './add-class';
import { uniRemoveClass } from './remove-class';

export function uniHandleClass(el: Element, value: string, isNew: boolean, prefix = '', suffix = ''): void {
  if (isNew) {
    uniAddClass(el, value, prefix, suffix);
  } else {
    uniRemoveClass(el, value, prefix, suffix);
  }
}
