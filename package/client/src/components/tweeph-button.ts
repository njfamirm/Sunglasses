import { html, css, LitElement } from 'lit';

export default class Button extends LitElement {
  static styles? = css`
  button {
    font-weight: 600;
    font-size: 1.2em;
    border-radius: 250px;
    padding: 10px 25px;
    user-select: none;
    min-height: 40px;
    min-width: 36px;
    background-color: rgb(29, 155, 240);
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
    height: 100%;
  }

  button:hover {
    background-color: #1A8CD8;
  }

  button:focus {
    border: none;
  }
  `

  render() {
    return html`
        <button>${this.innerHTML.toString()}</button>
      `;
  }
}

customElements.define('tweeph-button', Button);
