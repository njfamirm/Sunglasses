import {createLogger} from '@alwatr/logger';
import {LitElement, PropertyValues} from 'lit';

import type {Logger} from '@alwatr/logger/type';

export abstract class SunglassesElement extends LitElement {
  // eslint-disable-next-line no-invalid-this
  _logger: Logger = createLogger(`<${this.tagName.toLowerCase()}>`)

  constructor() {
    super();
    this._logger.logMethod('constructor');
  }

  override connectedCallback(): void {
    this._logger.logMethod('connectedCallback');
    super.connectedCallback();
  }

  override disconnectedCallback(): void {
    this._logger.logMethod('disconnectedCallback');
    super.disconnectedCallback();
  }

  protected override update(_changedProperties: PropertyValues): void {
    this._logger.logMethod('update');
    super.update(_changedProperties);
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    this._logger.logMethod('firstUpdated');
    super.firstUpdated(_changedProperties);
    this.removeAttribute('unresolved');
  }

  override dispatchEvent(event: CustomEvent | Event): boolean {
    this._logger.logMethodArgs('dispatchEvent', {type: event.type});
    return super.dispatchEvent(event);
  }
}
