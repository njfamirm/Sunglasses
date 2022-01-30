import { css, html, LitElement } from 'lit';

import '../components/tweeph-heading.ts';

export default class Body extends LitElement {
  static styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }

  *:focus-visible {
    outline: none;
  }
  `;

  render() {
    return html`
    <tweeph-heading>Tweeph</tweeph-heading>
    `;
  }
}

customElements.define('tweeph-home-page', Body);
