import { css, html, LitElement } from 'lit';

import '../components/sunglasses-button.ts';
import '../components/sunglasses-paragraf.ts';

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


  p::selection, span::selection {
    color: var(--white-dark-color);
    background-color: var(--black-color);
  }

  :host {
    width: 100%;
  }


  .banner {
    background-image: url("/public/img/banner-photo.webp");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .banner-text {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 82vh;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding-left: 0.2em;
  }

  .text > p > span {
    background-color: var(--black-color);
    color: var(--white-color);
  }

  .text > p > span > span {
    font-weight: 400;
  }


  h1 {
    color: var(--white-color);
    font-size: 5em;
    user-select: none;
    font-weight: 700;
  }

  .banner-text {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 1.5em;
    line-height: 1.5em;
  }

  .generate-info {
    padding: 2em 3em;
    background-color: var(--white-dark-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .generate-info > p {
    color: var(--black-color);
    font-weight: 400;
    margin-right: 1em;
  }

  .generate-info > p > span {
    color: var(--light-gray-color);
  }

  .empty {
    height: 75vh;
  }

  .info {
    background-color: var(--white-dark-color);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 7em;
  }

  .info > * {
    margin-bottom: 5em;
    max-width: 70vw
  }
  `;

  /**
   * @TODO: fix width
   * @TODO: add link for start button
   */
  render() {
    return html`
    <div class="banner">
      <div class="banner-text">
        <h1>Sunglasses</h1>
        <div class="text">
          <p><span><span>Simplicity</span> while being efficient</span></p>
          <p><span>share <span>Everywhere!</span></span></p>
        </div>
      </div>
      <div class="generate-info">
        <p>Simple, Free, Efficient<span>, Isn't it time to give it a try?!</span></p>
        <sunglasses-button>Start</sunglasses-button>
      </div>
      <div class="empty"></div>
      <div class="info">
        <sunglasses-paragraf header="Simplity"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper risus et turpis sagittis euismod. Maecenas interdum sed risus quis pretium. Sed id efficitur sem. Quisque pretium neque a lorem sollicitudin, at auctor libero facilisis. Ut iaculis, turpis sit amet tristique ornare, purus sem consequat ex, et placerat diam tortor sit amet nibh. Nulla facilisi. Nam ut elit at ipsum auctor rutrum. Phasellus laoreet, eros non mattis malesuada, est augue vehicula magna, id faucibus ante sapien vel urna. Integer in justo id arcu fringilla consequat. Maecenas ullamcorper justo nec arcu sodales lacinia. Aliquam dictum ipsum erat, eget vulputate mi pulvinar et. </sunglasses-paragraf>
        <sunglasses-paragraf header="Free"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper risus et turpis sagittis euismod. Maecenas interdum sed risus quis pretium. Sed id efficitur sem. Quisque pretium neque a lorem sollicitudin, at auctor libero facilisis. Ut iaculis, turpis sit amet tristique ornare, purus sem consequat ex, et placerat diam tortor sit amet nibh. Nulla facilisi. Nam ut elit at ipsum auctor rutrum. Phasellus laoreet, eros non mattis malesuada, est augue vehicula magna, id faucibus ante sapien vel urna. Integer in justo id arcu fringilla consequat. Maecenas ullamcorper justo nec arcu sodales lacinia. Aliquam dictum ipsum erat, eget vulputate mi pulvinar et. </sunglasses-paragraf>
        <sunglasses-paragraf header="PWA"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper risus et turpis sagittis euismod. Maecenas interdum sed risus quis pretium. Sed id efficitur sem. Quisque pretium neque a lorem sollicitudin, at auctor libero facilisis. Ut iaculis, turpis sit amet tristique ornare, purus sem consequat ex, et placerat diam tortor sit amet nibh. Nulla facilisi. Nam ut elit at ipsum auctor rutrum. Phasellus laoreet, eros non mattis malesuada, est augue vehicula magna, id faucibus ante sapien vel urna. Integer in justo id arcu fringilla consequat. Maecenas ullamcorper justo nec arcu sodales lacinia. Aliquam dictum ipsum erat, eget vulputate mi pulvinar et. </sunglasses-paragraf>
      </div>
    </div>
    `;
  }
}

customElements.define('sunglasses-home-page', Body);
