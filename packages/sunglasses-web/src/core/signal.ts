import {SignalInterface} from '@alwatr/signal';

import {signalValue} from './type';

declare global {
  interface AlwatrSignals {
    readonly sunglasses: signalValue;
  }

  interface AlwatrRequestSignals {
    readonly sunglasses: string;
  }
}

export const sunglassesSignal = new SignalInterface('sunglasses');
