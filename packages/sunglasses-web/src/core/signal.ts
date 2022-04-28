import {SignalInterface} from '@alwatr/signal';

import {signalValue} from './type';

declare global {
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals {
    readonly sunglasses: signalValue;
  }

  /**
   * Global request signal parameters types.
   */
  interface AlwatrRequestSignals {
    readonly sunglasses: string;
  }
}

export const sunglassesSignal = new SignalInterface('sunglasses');
