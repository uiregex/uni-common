import {
  UniFetchCache,
  UniFetchCredentials,
  UniFetchMethod,
  UniFetchMode,
  UniFetchRedirect,
  UniFetchReferrerPolicy
} from '../types/fetch-options.type';

export interface UniFetchOptions  {
  method: UniFetchMethod;
  mode: UniFetchMode;
  cache: UniFetchCache;
  credentials: UniFetchCredentials;
  redirect: UniFetchRedirect;
  referrerPolicy: UniFetchReferrerPolicy;
}
