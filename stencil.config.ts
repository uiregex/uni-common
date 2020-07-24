import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'common',
  taskQueue: 'async',
  buildEs5: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false,
    slotChildNodesFix: true,
    appendChildSlotFix: true,
    cloneNodeFix: true
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      empty: true
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
