import { UniFetchOptions, UniResponse } from '../../models';

export async function uniFetch(url: string, type: UniResponse, options?: Partial<UniFetchOptions>): Promise<any> {
  const response = await fetch(url, options);

  return await response[type]();
}
