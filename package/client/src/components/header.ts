import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class Header extends LitElement {
  static styles = css`
  :host {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    color: #14171A;
    text-shadow: 4px 4px #1DA1F2;
    cursor: pointer;
    transition: text-shadow 0.5s ease;
  }

  :host(:hover) {
    text-shadow: 8px 8px #1DA1F2;
  }
  `;

  // Declare reactive properties
  @property({ type: Number, attribute: true })
  degree?: number = 1;

  // Render the UI as a function of component state
  render() {
    switch (this.degree) {
      case 2:
        return html`<h2 style="font-size: 4.5em">${this.innerHTML}</h2>`;
      case 3:
        return html`<h3 style="font-size: 4em">${this.innerHTML}</h3>`;
      case 4:
        return html`<h4 style="font-size: 3.5em">${this.innerHTML}</h4>`;
      case 5:
        return html`<h5 style="font-size: 3em">${this.innerHTML}</h5>`;
      case 6:
        return html`<h6 style="font-size: 2em">${this.innerHTML}</h6>`;
      default:
        return html`<h1 style="font-size: 5em">${this.innerHTML}</h1>`;
    }
  }
}

customElements.define('end-h', Header);
