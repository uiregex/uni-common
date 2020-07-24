import { UniFetchOptions, UniResponse } from '../../models';
import { uniFetch } from './fetch';

export async function uniLoad(url: string, type: UniResponse, options?: Partial<UniFetchOptions>): Promise<any> {
  return await uniFetch(url, type, options);
}
