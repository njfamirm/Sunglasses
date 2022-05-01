import {createLogger} from '@alwatr/logger';
import {LitElement} from 'lit';

import {sunglassesSignal} from '../../core/signal';
import {signalType, signalValue} from '../../core/type';

import type {Logger} from '@alwatr/logger/type';

type Callback = (() => void) | ((param: string) => void);

// eslint-disable-next-line @typescript-eslint/ban-types
function needsNoParam(x: Function): x is () => void {
  return x.length === 0;
}

export abstract class SunglassesElement extends LitElement {
  // eslint-disable-next-line no-invalid-this
  _logger: Logger = createLogger(`<${this.tagName.toLowerCase()}>`);

  // Thanks to jcalz: https://stackoverflow.com/questions/72079547/define-function-type-with-optional-param-in-typescript?noredirect=1#comment127358752_72079547
  protected _signalListener(callback: Callback, signalType: signalType): void {
    this._logger.incident(
      'signal_listener',
      'add_signal_listener',
      `signal listener added for ${signalType}`,
    );
    sunglassesSignal.addListener((signal: signalValue) => {
      if (signal.name === signalType) {
        if (!needsNoParam(callback)) {
          if (signal.description !== undefined) {
            callback(signal.description);
          } else {
            this._logger.error(
              'signal_listener',
              'signal_description_undifined',
              'description undifined',
            );
          }
        } else {
          callback();
        }
      }
    });
  }

  protected _signalDispatch(signal: signalValue): void {
    sunglassesSignal.dispatch(signal);
  }
}
