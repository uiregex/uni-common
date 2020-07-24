export type UniFetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type UniFetchMode = 'cors' | 'no-cors' | 'same-origin';

export type UniFetchCache = 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';

export type UniFetchCredentials = 'same-origin' | 'include' | 'omit';

export type UniFetchRedirect = 'follow' | 'manual' | 'error';

export type UniFetchReferrerPolicy = 'no-referrer-when-downgrade' | 'no-referrer' | 'origin' | 'same-origin'
  | 'origin-when-cross-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';

