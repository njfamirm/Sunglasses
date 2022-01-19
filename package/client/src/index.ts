import { css, html, LitElement } from 'lit';

import './components/header.ts';
import './components/button.ts';
import './components/input.ts';

export default class Body extends LitElement {
  static styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `;

  render() {
    return html`
    <div class="container"></div>
    `;
  }
}

customElements.define('end-body', Body);
