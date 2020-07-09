import { Component, ComponentInterface, Prop } from '@stencil/core';

@Component({ tag: 'uni-license' })
export class UniLicenseComponent implements ComponentInterface {
  @Prop() adk: string;

  @Prop() mat: string;

  @Prop() pro: string;

  @Prop() loc: string;

  componentDidLoad(): void {
    const adk = this.adk || window['uni']?.codes.adk;
    const mat = this.mat || window['uni']?.codes.mat;
    const pro = this.pro || window['uni']?.codes.pro;
    const loc = this.loc || window['uni']?.codes.loc;

    window['uni'] = { ...window['uni'], codes: { adk, mat, pro, loc } };
  }
}
