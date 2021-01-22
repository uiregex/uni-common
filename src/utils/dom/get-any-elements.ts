export function uniGetAnyElements(selector: string): Element[] {
  const elements = Array.from(window.top.document.body.querySelectorAll(selector) || []);

  Array.from(window.top.document.body.getElementsByTagName('*') || [])
    .filter(element => element.shadowRoot)
    .forEach(element => {
      elements.push(...Array.from(element.shadowRoot.querySelectorAll(selector) || []));
    });

  Array.from(window.top.document.body.querySelectorAll('iframe') || [])
    .forEach((frame) => {
      elements.push(...Array.from(frame.contentDocument?.body?.querySelectorAll(selector) || []));

      Array.from(frame.contentDocument?.body?.getElementsByTagName('*') || [])
        .filter(element => element.shadowRoot)
        .forEach(element => {
          elements.push(...Array.from(element.shadowRoot.querySelectorAll(selector) || []));
        });
    });

  return elements;
}
