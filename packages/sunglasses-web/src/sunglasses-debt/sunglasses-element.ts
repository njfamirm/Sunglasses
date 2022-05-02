import {createLogger} from '@alwatr/logger';
import {LitElement} from 'lit';

import {sunglassesSignal} from '../core/signal';
import {signalType, signalValue} from '../core/type';

import type {Logger} from '@alwatr/logger/type';

type Callback = (...param: string[]) => void;

export abstract class SunglassesElement extends LitElement {
  // eslint-disable-next-line no-invalid-this
  _logger: Logger = createLogger(`<${this.tagName.toLowerCase()}>`);

  // https://stackoverflow.com/questions/72079547/define-function-type-with-or-without-parameters
  protected _signalListener(callback: Callback, signalType: signalType): void {
    this._logger.incident(
      'signal_listener',
      'add_signal_listener',
      `signal listener added for ${signalType}`,
    );
    sunglassesSignal.addListener((signal: signalValue) => {
      if (signal.name === signalType) {
        if (callback.length !== 0) {
          if (signal.description !== undefined) {
            callback(signal.description);
          } else {
            this._logger.error(
              'signal_listener',
              'signal_description_undifined',
              `signal description undifined in ${JSON.stringify(signal, null, '2')}`,
            );
          }
        } else {
          callback();
        }
      }
    });
  }

  protected _signalDispatch(signal: signalValue): void {
    this._logger.incident(
      'signal_dispatch',
      'signal_dispatched',
      `${JSON.stringify(signal, null, '2')} dispatched`,
    );
    sunglassesSignal.dispatch(signal);
  }
}
