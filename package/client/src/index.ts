import { css, html, LitElement } from 'lit';

import './components/header.ts';

export default class Body extends LitElement {
  static styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
    <end-h degree=1>Test</end-h>
    <end-h degree=2>Test</end-h>
    <end-h degree=3>Test</end-h>
    <end-h degree=4>Test</end-h>
    <end-h degree=5>Test</end-h>
    <end-h degree=6>Test</end-h>
    `;
  }
}

customElements.define('end-body', Body);
