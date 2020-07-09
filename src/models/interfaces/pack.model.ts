import { UniPackName } from '../types/pack.type';

export interface UniPacks {
  packages: UniPackName[];
}

export interface UniStrictPacks extends UniPacks {
  el: HTMLElement | ShadowRoot;
}

export interface UniPackExclusion extends UniPacks {
  strict: UniStrictPacks;
}
