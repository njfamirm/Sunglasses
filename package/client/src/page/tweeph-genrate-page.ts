import { css, html, LitElement } from 'lit';

import '../components/tweeph-heading.ts';
import '../components/tweeph-button.ts';
import '../components/tweeph-genrate-form.ts';
import '../components/tweeph-header.ts';

export default class Body extends LitElement {
  static styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }

  .container {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  `;

  render() {
    return html`
    <div class="container">
      <tweeph-header></tweeph-header>
    </div>
    `;
  }
}

customElements.define('tweeph-genrate-page', Body);
