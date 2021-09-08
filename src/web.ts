import { WebPlugin } from '@capacitor/core';

import type { PrintPlugin } from './definitions';

export class PrintWeb extends WebPlugin implements PrintPlugin {
  async print(): Promise<void> {
    console.log('PRINT');
    try {
      document.execCommand('print', false);
    } catch (e) {
      window.print();
    }
    return;
  }
}
