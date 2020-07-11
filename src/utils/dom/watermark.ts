import { UniBase64Regex, UniCodes, UniPackName, UniPackExclusion } from '../../models';

const html = `<div style="position: absolute; z-index: 2147483647; bottom: 20px; right: 20px;"><a href="https://uiwebkit.com" target="_blank" style="text-decoration: none; font-family: 'Times New Roman', Times, serif; font-size: 20px; color: #AAA;"><span>Powered by </span><img style="width: 20px; margin-bottom: -3px;" src="assets/img/logo.png" alt="UiWebKit"></a></div>`;

export function uniWatermark(type: UniPackName, exclusions?: Partial<UniPackExclusion>): void {
  if (!isSameElement() && !isLicensed(type, exclusions)) {
    document.body.insertAdjacentHTML('beforeend', html);
  }
}

function isSameElement(): boolean {
  const children = Array.from(document.body.children);

  return children[children.length - 1].outerHTML === html;
}

function isLicensed(type: UniPackName, exclusions: Partial<UniPackExclusion>): boolean {
  return isPackLicensed(type) || hasExclusion(exclusions);
}

function isPackLicensed(type: UniPackName): boolean {
  return UniBase64Regex.test(getKey(type)) && atob(getKey(type)) === UniCodes[type];
}

function hasExclusion(exclusions: Partial<UniPackExclusion>): boolean {
  return (exclusions?.packages && exclusions.packages.some((type: UniPackName): boolean => isPackLicensed(type)))
    || (exclusions?.strict && hasParentPack(exclusions.strict.el, exclusions.strict.packages));
}

function getKey(type: UniPackName): string {
  return window['uni']?.codes && window['uni'].codes[type];
}

function hasParentPack(el: HTMLElement | ShadowRoot, types: UniPackName[]): boolean {
  return types && types.some((type: UniPackName): boolean =>
    isPackLicensed(type) && isPackType(el.parentElement, type)
  );
}

function isPackType(el: HTMLElement | ShadowRoot, type: UniPackName): boolean {
  return el['package'] === type || (el.parentElement && isPackType(el.parentElement, type));
}
