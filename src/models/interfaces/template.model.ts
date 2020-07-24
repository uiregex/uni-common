import { VNode } from '@stencil/core';

import { UniProps } from './props.model';

export interface UniFunctionalHostTemplate {
  (props: Partial<UniProps>, children?: VNode): VNode;
}

export interface UniFunctionalTemplate {
  (children: VNode): VNode;
}
