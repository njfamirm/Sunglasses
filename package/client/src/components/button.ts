import { html, css, LitElement } from 'lit';
import {} from 'lit/decorators.js';

export default class Button extends LitElement {
  static styles? = css`
  button {
    font-weight: 600;
    font-size: 15px;
    border-radius: 999px;
    padding-left: 16px;
    padding-right: 16px;
    user-select: none;
    min-height: 36px;
    min-width: 36px;
    background-color: rgb(29, 155, 240);
    color: #fff;
    border: none;
    cursor: pointer;
  }
  `

  render() {
    return html`
      <button>${this.innerHTML.toString()}</button>
      `;
  }
}

customElements.define('tweeph-button', Button);
