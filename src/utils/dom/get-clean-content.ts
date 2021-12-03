import { uniGetContent } from './get-content';
import { uniClearContent } from './clear-content';

export function uniGetCleanContent(el: HTMLElement): string {
  const content = uniGetContent(el);
  uniClearContent(el);

  return content || null;
}
