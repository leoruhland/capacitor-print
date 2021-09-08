import { WebPlugin } from '@capacitor/core';

import type { PrintPlugin } from './definitions';

export class PrintWeb extends WebPlugin implements PrintPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
