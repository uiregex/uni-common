import { getUniCodes } from '../functions/get-codes';

const html = `<div style="position: absolute; z-index: 2147483647; bottom: 20px; right: 20px;">
<a href="https://uiwebkit.com" target="_blank" style="text-decoration: none; font-family: 'Times New Roman', Times, serif; font-size: 20px; color: #AAA;">
<span>Powered by </span>
<svg style="width: 20px; margin-bottom: -3px;" xmlns="http://www.w3.org/2000/svg" viewBox="309 198 110 119" width="24" height="24">
<path style="fill: #DE7533;" d="M310.26 229.72L310.26 283.3C310.26 283.67 310.26 283.88 310.26 283.93C310.26 286.84 312.05 289.39 314.8 291.63C316.43 292.96 323.95 296.2 332.24 300.19C345.15 306.39 360.57 313.79 363.57 313.84C363.57 302.35 363.57 210.47 363.57 198.98C360.57 199.03 345.15 206.43 332.24 212.63C323.95 216.62 316.43 219.86 314.8 221.19C312.05 223.43 310.26 225.98 310.26 228.89C310.26 229 310.26 229.28 310.26 229.72Z"></path>
<path style="fill: #AC5B28;" d="M416.88 229.72L416.88 283.3C416.88 283.67 416.88 283.88 416.88 283.93C416.88 286.84 415.08 289.39 412.34 291.63C410.71 292.96 403.18 296.2 394.9 300.19C381.99 306.39 366.57 313.79 363.57 313.84C363.57 302.35 363.57 210.47 363.57 198.98C366.57 199.03 381.99 206.43 394.9 212.63C403.18 216.62 410.71 219.86 412.34 221.19C415.08 223.43 416.88 225.98 416.88 228.89C416.88 229 416.88 229.28 416.88 229.72Z"></path>
<path style="fill: #A4A4A4;" d="M377.02 225.34C377.02 249.53 377.02 262.97 377.02 265.66C377.02 274.85 375.55 277.57 368.24 277.57C360.93 277.57 356.96 273.85 356.96 264.66C356.96 262.04 356.96 248.93 356.96 225.34L338.59 225.34C338.59 250.72 338.59 264.82 338.59 267.64C338.59 288.25 351.9 292.19 366.24 292.19C380.59 292.19 395.4 286.75 395.4 266.14C395.4 263.42 395.4 249.82 395.4 225.34L377.02 225.34Z"></path>
<path style="fill: #FEFEFE;" d="M371.68 225.34C371.68 249.53 371.68 262.97 371.68 265.66C371.68 274.85 368.21 279.32 360.89 279.32C353.58 279.32 350.11 274.85 350.11 265.66C350.11 262.97 350.11 249.53 350.11 225.34L331.74 225.34C331.74 250.72 331.74 264.82 331.74 267.64C331.74 288.25 346.55 295.19 360.89 295.19C375.24 295.19 390.05 288.25 390.05 267.64C390.05 264.82 390.05 250.72 390.05 225.34L371.68 225.34Z"></path>
</svg>
</a>
</div>`;

export function uniWatermark(key: string, value: string): void {
  setTimeout(function() {
    if (!isLicensed(key, value) && !hasSameElement()) {
      document.body.insertAdjacentHTML('beforeend', html);
      uniDebugCodes(key);
    }
  }, 1000);
}

function hasSameElement(): boolean {
  const children = Array.from(document.body.children);

  return children[children.length - 1].outerHTML === html;
}

function isLicensed(key: string, value: string): boolean {
  return getUniCodes()[key] === btoa(value);
}

function uniDebugCodes(key: string): void {
  const debug = sessionStorage.getItem('uni.debug') || localStorage.getItem('uni.debug');

  if (debug && JSON.parse(debug).codes) {
    console.log(key);
  }
}


