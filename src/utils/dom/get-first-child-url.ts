export function uniGetFirstChildUrl(el: HTMLElement): string {
  const firstChild = el.children[0];

  return firstChild && firstChild['href'];
}
