interface UniGetAnyElements {
  selector: string;
  shadow?: boolean;
  frames?: boolean;
}

export function uniGetAnyElements(data: UniGetAnyElements): Element[] {
  const { selector, shadow, frames } = data;
  const elements = Array.from(window.top.document.body.querySelectorAll(selector) || []);

  if (shadow) {
    Array.from(window.top.document.body.getElementsByTagName('*') || [])
      .filter(element => element.shadowRoot)
      .forEach(element => {
        elements.push(...Array.from(element.shadowRoot.querySelectorAll(selector) || []));
      });
  }

  if (frames) {
    Array.from(window.top.document.body.querySelectorAll('iframe') || [])
      .forEach((frame) => {
        elements.push(...Array.from(frame.contentDocument?.body?.querySelectorAll(selector) || []));

        Array.from(frame.contentDocument?.body?.getElementsByTagName('*') || [])
          .filter(element => element.shadowRoot)
          .forEach(element => {
            elements.push(...Array.from(element.shadowRoot.querySelectorAll(selector) || []));
          });
      });
  }

  return elements;
}
