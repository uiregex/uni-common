import { UniObject } from '../../models';
import { isObject } from '../coercion/is';
import { handleClass } from './handle-class';

export function uniHandleClasses(el: Element, classes: UniObject<boolean>): void {
  if (isObject(classes)) {
    Object.keys(classes)
      .forEach(key => {
        handleClass(el, key, classes[key]);
      });
  }
}
