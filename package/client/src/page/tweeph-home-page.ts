import { css, html, LitElement } from 'lit';

import '../components/tweeph-button.ts';

export default class Body extends LitElement {
  static styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-weight: 300;
  }

  *:focus-visible {
    outline: none;
  }

  .banner {
    display: flex;
    flex-direction: row;
  }

  .banner > * {
    padding: 50px;
  }

  .text {
    justify-content: center;
  }

  .banner-text {
    margin: 1em;
    padding-left: 0.2em;
  }

  .banner-text > * {
    padding: 0 20px;
  }

  h1 {
    color: var(--black-color);
    font-size: 4em;
    user-select: none;
    font-weight: 700;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  a {
    align-self: end;
  }

  img {
    box-shadow: 5px 5px 12px 4px #00000024;
    width: 30vw;
    border-radius: 10px;
  }

  p {
    font-size: 1.3em;
    line-height: 1.3em;
  }
  `;

  render() {
    return html`
    <div class="banner">
      <div class="text">
        <h1>Tweeph</h1>
        <div class="banner-text">
          <p>Genrate customize able image from tweet</p>
          <p>And share anywhere!</p>
        </div>
        <a href="/generate">
          <tweeph-button>Generating</tweeph-button>
        </a>
      </div>
      <div class="photo">
        <img src="/public/img/banner-photo.webp" alt="banner photo">

      </div>
    </div>
    `;
  }
}

customElements.define('tweeph-home-page', Body);
