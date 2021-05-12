import { UniObject } from '../../models';
import { uniGetTargetElements } from './get-target-elements';
import { uniHandleClasses } from './handle-classes';

export function uniHandleTargetClasses(el: HTMLElement, classes: UniObject<boolean>, all?: boolean, selector?: string): void {
  uniGetTargetElements(el, all, selector)
    .forEach((target: Element) => {
      uniHandleClasses(target, classes);
    });
}
