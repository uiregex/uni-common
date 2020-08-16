import { VNode } from '@stencil/core';

import { UniProps } from './props.model';

export interface UniFunctionalHostTemplate {
  (props: Partial<UniProps>, template?: VNode): VNode;
}

export interface UniFunctionalTemplate {
  (template: VNode): VNode;
}
