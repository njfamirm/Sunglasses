import { html, css, LitElement } from 'lit';

export default class Button extends LitElement {
  static styles? = css`
  button {
    font-weight: 400;
    font-size: 1.2em;
    border-radius: 250px;
    padding: 10px 25px;
    user-select: none;
    min-height: 40px;
    min-width: 36px;
    background-color: var(--blue-color);
    color: var(--light-color);
    border: none;
    cursor: pointer;
    transition: background-color 2s cubic-bezier(.6,.32,.06,.74) 0s;
    height: 100%;
  }

  button:hover {
    background-color: var(--dark-blue-color);
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
