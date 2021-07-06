interface UniGetAnyElements {
  top?: boolean;
  shadow?: boolean;
  frame?: boolean;
  selector: string;
}

export function uniGetAnyElements(data: UniGetAnyElements): Element[] {
  const { top, shadow, frame, selector } = data;
  const elements = Array.from((top ? window.top : window).document.body.querySelectorAll(selector) || []);

  if (shadow) {
    elements.push(...getShadowInnerElements((top ? window.top : window).document.body.getElementsByTagName('*'), selector));
  }

  if (frame) {
    Array.from((top ? window.top : window).document.body.querySelectorAll('iframe') || [])
      .forEach((frame: HTMLIFrameElement): void => {
        elements.push(...Array.from(frame.contentDocument?.body?.querySelectorAll(selector) || []));

        if (shadow) {
          elements.push(...getShadowInnerElements(frame.contentDocument?.body?.getElementsByTagName('*'), selector));
        }
      });
  }

  return elements;
}

function getShadowInnerElements(elems: HTMLCollectionOf<Element>, selector: string): Element[] {
  const elements = [];

  Array.from(elems || [])
    .filter((element: HTMLElement): boolean => !!element.shadowRoot)
    .forEach((element: HTMLElement): void => {
      elements.push(...Array.from(element.shadowRoot.querySelectorAll(selector) || []));
    });

  return elements;
}
