import { h, Host, VNode } from '@stencil/core';

import { UniFunctionalTemplate } from '../../models';

export const UniTemplate: UniFunctionalTemplate = (children): VNode => {
  return <Host>{children}</Host>;
};
