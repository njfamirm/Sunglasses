import { css, html, LitElement } from 'lit';

import '../components/tweeph-button.ts';
import '../components/tweeph-paragraf.ts';

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


  p::selection {
    color: var(--light-gray-color);
    background-color: var(--black-color);
  }


  .banner {
    background-image: url("/public/img/banner-photo.webp");
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
    user-select: none;
    color: var(--light-gray-color);
    background-color: var(--dark-gray-color);
  }

  .text > p {
    font-weight: 400;
    color: var(--dark-gray-color)
  }

  h1 {
    color: var(--black-color);
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
    background-color: var(--light-gray-color);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  /**
  * @TODO: fix typing effect
  */
  .generate-info > p > span {
    /* width: 32ch;
    animation: typing 4s steps(32);
    white-space: nowrap;
    overflow: hidden; */
    color: var(--dark-gray-color)
  }

  /* @keyframes typing {
    from {
      width: 0
    }
  } */

  .empty {
    height: 75vh;
  }

  .info {
    background-color: var(--light-gray-color);
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
   */
  render() {
    return html`
    <div class="banner">
      <div class="banner-text">
        <h1>Tweeph</h1>
        <div class="text">
          <p><span>Customize able</span> image from tweet</p>
          <p>And share <span>anywhere!</span></p>
        </div>
      </div>
      <div class="generate-info">
        <p>There is no monetary plan<span>, in fact we do not have any plan!</span></p>
        <tweeph-button>Starting</tweeph-button>
      </div>
      <div class="empty"></div>
      <div class="info">
        <tweeph-paragraf header="Simplity"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper risus et turpis sagittis euismod. Maecenas interdum sed risus quis pretium. Sed id efficitur sem. Quisque pretium neque a lorem sollicitudin, at auctor libero facilisis. Ut iaculis, turpis sit amet tristique ornare, purus sem consequat ex, et placerat diam tortor sit amet nibh. Nulla facilisi. Nam ut elit at ipsum auctor rutrum. Phasellus laoreet, eros non mattis malesuada, est augue vehicula magna, id faucibus ante sapien vel urna. Integer in justo id arcu fringilla consequat. Maecenas ullamcorper justo nec arcu sodales lacinia. Aliquam dictum ipsum erat, eget vulputate mi pulvinar et. </tweeph-paragraf>
        <tweeph-paragraf header="Free"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper risus et turpis sagittis euismod. Maecenas interdum sed risus quis pretium. Sed id efficitur sem. Quisque pretium neque a lorem sollicitudin, at auctor libero facilisis. Ut iaculis, turpis sit amet tristique ornare, purus sem consequat ex, et placerat diam tortor sit amet nibh. Nulla facilisi. Nam ut elit at ipsum auctor rutrum. Phasellus laoreet, eros non mattis malesuada, est augue vehicula magna, id faucibus ante sapien vel urna. Integer in justo id arcu fringilla consequat. Maecenas ullamcorper justo nec arcu sodales lacinia. Aliquam dictum ipsum erat, eget vulputate mi pulvinar et. </tweeph-paragraf>
        <tweeph-paragraf header="PWA"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper risus et turpis sagittis euismod. Maecenas interdum sed risus quis pretium. Sed id efficitur sem. Quisque pretium neque a lorem sollicitudin, at auctor libero facilisis. Ut iaculis, turpis sit amet tristique ornare, purus sem consequat ex, et placerat diam tortor sit amet nibh. Nulla facilisi. Nam ut elit at ipsum auctor rutrum. Phasellus laoreet, eros non mattis malesuada, est augue vehicula magna, id faucibus ante sapien vel urna. Integer in justo id arcu fringilla consequat. Maecenas ullamcorper justo nec arcu sodales lacinia. Aliquam dictum ipsum erat, eget vulputate mi pulvinar et. </tweeph-paragraf>
      </div>
    </div>
    `;
  }
}

customElements.define('tweeph-home-page', Body);
