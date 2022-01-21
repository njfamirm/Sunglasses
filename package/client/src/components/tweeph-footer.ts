import { html, css, LitElement } from 'lit';

export default class Footer extends LitElement {
  static styles? = css`
    :host {
      width: 100%;
    }

    footer {
      box-sizing: border-box;
      width: 100%;
      padding: 1em;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: #1D9BF0;
    }

    p {
      font-size: 1em;
      color: #fff;
    }
  `

  render() {
    return html`
        <footer>
          <p>Copyright 2022 Tweeph</p>
        </footer>
      `;
  }
}

customElements.define('tweeph-footer', Footer);
