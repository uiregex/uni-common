import { uniModifyAsync } from './modify-async';
import { uniModifyStyle } from './modify-style';

export function uniSetRound(el: Element, round: boolean): void {
  if (round) {
    uniModifyAsync({ el, selector: 'svg' }, { 'border-radius': '50%' }, uniModifyStyle);
  }
}
