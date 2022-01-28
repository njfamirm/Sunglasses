import { css, html, LitElement } from 'lit';

export default class Hello extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  /**
  * @TODO: fix linter
  */
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<p>Hello Lit</p>`;
  }
}

customElements.define('deno-lit-typescript-starter-hello', Hello);
