import { UniElementData } from '../../models';
import { uniGetShadowInnerElements } from './get-shadow-inner-elements';

export function uniGetAnyElements(data: UniElementData): Element[] {
  const { top, shadow, frame, selector } = data;
  const elements = Array.from((top ? window.top : window).document.body.querySelectorAll(selector) || []);

  if (shadow) {
    elements.push(...uniGetShadowInnerElements((top ? window.top : window).document.body.getElementsByTagName('*'), selector));
  }

  if (frame) {
    Array.from((top ? window.top : window).document.body.querySelectorAll('iframe') || [])
      .forEach((frame: HTMLIFrameElement): void => {
        elements.push(...Array.from(frame.contentDocument?.body?.querySelectorAll(selector) || []));

        if (shadow) {
          elements.push(...uniGetShadowInnerElements(frame.contentDocument?.body?.getElementsByTagName('*'), selector));
        }
      });
  }

  return elements;
}
