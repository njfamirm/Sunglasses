import { html, css, LitElement } from 'lit';

export default class About extends LitElement {
  static styles? = css`
    :host {
      width: 100%;
      height: 100vh;
      background-color: #1D9BF0;
    }
  `

  render() {
    return html``;
  }
}

customElements.define('tweeph-about', About);
