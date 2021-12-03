export function uniGetShadowInnerElements(elems: HTMLCollectionOf<Element>, selector: string): Element[] {
  const elements = [];

  Array.from(elems || [])
    .filter((element: HTMLElement): boolean => !!element.shadowRoot)
    .forEach((element: HTMLElement): void => {
      elements.push(...Array.from(element.shadowRoot.querySelectorAll(selector) || []));
    });

  return elements;
}
