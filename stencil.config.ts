import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'common',
  buildEs5: 'prod',
  enableCache: false,
  taskQueue: 'async',
  extras: {
    appendChildSlotFix: true,
    cloneNodeFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    scriptDataOpts: false,
    shadowDomShim: true,
    initializeNextTick: true,
    slotChildNodesFix: true,
    tagNameTransform: true,
  },
  hydratedFlag: {
    name: `hydrated`,
    selector: 'class',
    property: `visibility`,
    initialValue: `hidden`,
    hydratedValue: `inherit`,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      empty: true
    },
    // {
    //   type: 'dist-custom-elements-bundle',
    //   empty: true,
    // },
    {
      type: 'docs-readme',
      footer: '*Powered by [UiWebKit](https://uiwebkit.com/)*',
      dependencies: true,
      // strict: true,
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
