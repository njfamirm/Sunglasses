import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class Paragraf extends LitElement {
  static styles = css`
    p::selection {
      color: var(--light-gray-color);
      background-color: var(--black-color);
    }

    h2 {
      font-weight: 700;
      color: var(--blue-color);
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

  @property({ type: String, attribute: true })
  header: string = '';

  // @property({ type: String, attribute: true })
  // id: string = '';

  /**
   * @TODO: add ID
   */
  render() {
    return html`
      <h2>${this.header}</h2>
      <p>${this.innerHTML.toString()}</p>
      `;
  }
}

customElements.define('tweeph-paragraf', Paragraf);
