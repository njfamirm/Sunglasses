import { html, css, LitElement } from 'lit';
import {} from 'lit/decorators.js';

export default class Input extends LitElement {
  static styles? = css`
  input {
    font-weight: 500;
    font-size: 18px;
    border-radius: 999px;
    padding: 10px 25px;
    user-select: none;
    min-height: 40px;
    width: 650px;
    color: rgb(15, 20, 25);
    background-color: #EFF3F4;
    border: none;
    outline: none;
  }

  input:focus {
    border: 1px solid rgba(29, 155, 240, 0.8);
  }

  ::placeholder {
    color: rgba(15, 20, 25, 0.4);
  }
  `

  render() {
    return html`
      <input type="text" placeholder="${this.innerHTML.toString()}"></input>
      `;
  }
}

customElements.define('tweeph-input', Input);
