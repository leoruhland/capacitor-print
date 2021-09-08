import { registerPlugin } from '@capacitor/core';

import type { PrintPlugin } from './definitions';

const Print = registerPlugin<PrintPlugin>('Print', {
  web: () => import('./web').then(m => new m.PrintWeb()),
});

export * from './definitions';
export { Print };
