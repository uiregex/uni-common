import { h, Host, VNode } from '@stencil/core';

import { UniFunctionalHostTemplate } from '../../models';
import { UniTemplate } from './children.template';

export const UniHostTemplate: UniFunctionalHostTemplate = ({ props, classes }, template?): VNode => {
  return <Host {...props} class={classes}>{UniTemplate(template)}</Host>;
};
