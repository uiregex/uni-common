import { h, Host, VNode } from '@stencil/core';

import { UniFunctionalHostTemplate } from '../../models';

export const UniHostTemplate: UniFunctionalHostTemplate = ({ props, classes }, children): VNode => {
  return <Host {...props} class={classes}>{children}</Host>;
};
