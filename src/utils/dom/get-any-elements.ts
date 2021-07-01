interface UniGetAnyElements {
  selector: string;
  shadow?: boolean;
  frame?: boolean;
}

export function uniGetAnyElements(data: UniGetAnyElements): Element[] {
  const { selector, shadow, frame } = data;
  const elements = Array.from(window.top.document.body.querySelectorAll(selector) || []);

  if (shadow) {
    elements.push(...getShadowInnerElements(window.top.document.body.getElementsByTagName('*'), selector));
  }

  if (frame) {
    Array.from(window.top.document.body.querySelectorAll('iframe') || [])
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
