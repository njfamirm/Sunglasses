import { html, LitElement } from 'lit';

import '../components/deno-lit-typescript-starter-hello.ts';

export default class HomePage extends LitElement {
  /**
  * @TODO: fix linter
  */
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<deno-lit-typescript-starter-hello></deno-lit-typescript-starter-hello>`;
  }
}

customElements.define('deno-lit-typescript-starter-home-page', HomePage);
