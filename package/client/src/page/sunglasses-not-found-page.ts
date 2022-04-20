import {html, css, LitElement} from 'lit';

import type {TemplateResult} from 'lit';

import '../components/sunglasses-button.ts';

export default class NotFOund extends LitElement {
  static override styles? = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    user-select: none;
  }

  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
  }

  .text > h1 {
    font-size: 9em;
    background-color: var(--black-color);
    color: var(--white-color);
    border-radius: 20px;
    padding: 0.1em;
    margin-right: 0.5em;
  }

  .text > p {
    font-size: 5em;
    color: var(--dark-gray-color)
  }
  `

  override render():TemplateResult {
    return html`
      <div class="text">
        <h1>404</h1>
        <p>You are lost!</p>
      </div>
      <a href="/"><sunglasses-button>Back to home</sunglasses-button></a>
    `;
  }
}

customElements.define('sunglasses-not-found-page', NotFOund);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'sunglasses-not-found-page': NotFOund;
  }
}
