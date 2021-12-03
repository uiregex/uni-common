export function uniGetElementIndex(el: HTMLElement, nodes): number {
  return [...nodes]
    .map((element, index: number): number => element.isSameNode(el) ? index : null)
    .reduce((acc, index: number) => acc === 0 || acc > 0 ? acc : index);
}
