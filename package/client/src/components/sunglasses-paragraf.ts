import {css, html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';

import type {TemplateResult} from 'lit';

export default class Paragraf extends LitElement {
  static override styles = css`
    p::selection {
      color: var(--white-dark-color);
      background-color: var(--black-color);
    }

    h2 {
      font-weight: 700;
      color: var(--dark-gray-color);
      user-select: none;
      display: block;
      font-size: 3em;
      display: inline;
    }

    p {
      padding-left: 1.3em;
      color: var(--black-color);
      font-size: 1.3em;
      line-height: 1.5em;
    }
  `;

  @property({type: String, attribute: true})
  header = '';

  // @property({ type: String, attribute: true })
  // id: string = '';

  /**
   * @TODO: add ID
   */
  override render(): TemplateResult {
    return html`
      <h2>${this.header}</h2>
      <p>${this.innerHTML.toString()}</p>
    `;
  }
}

customElements.define('sunglasses-paragraf', Paragraf);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'sunglasses-paragraf': Paragraf;
  }
}
