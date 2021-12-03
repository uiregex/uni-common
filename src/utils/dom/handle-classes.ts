import { UniObject } from '../../models';
import { isObject } from '../coercion/is';
import { uniHandleClass } from './handle-class';

export function uniHandleClasses(el: Element, classes: UniObject<boolean>): void {
  if (isObject(classes)) {
    Object.keys(classes)
      .forEach(key => {
        uniHandleClass(el, key, classes[key]);
      });
  }
}
