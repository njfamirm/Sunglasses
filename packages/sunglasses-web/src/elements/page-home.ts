import {html, css} from 'lit';

import {SunglassesElement} from '../core/sunglasses-element';

import type {TemplateResult} from 'lit';

import './tweet-container';
import './tweet-controller';

export default class PageHome extends SunglassesElement {
  static override styles? = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *:focus-visible {
      outline: none;
    }

    a {
      cursor: pointer;
      user-select: none;
      text-decoration: none;
    }

    :host {
      min-width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
    }

    header {
      width: 100%;
      padding: 0.2em 2em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      box-sizing: border-box;
      background-color: var(--white-color);
    }

    .logo {
      width: 3.2em;
      height: 100%;
      fill: currentColor;
      color: var(--black-color);
    }

    header > ul {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      justify-content: flex-end;
    }

    header > ul > li > .link {
      color: var(--black-color);
      text-decoration: none;
      font-size: 1.3em;
      font-weight: 400;
      transition: color 0.3s;
    }

    header > ul > li > .link:hover {
      color: var(--gray-color);
    }

    header > ul > li {
      list-style: none;
    }

    header > ul > li > a {
      margin: 0 0 0 3em;
    }

    .theme-switcher {
      width: 1.5em;
      height: 100%;
      margin: 0 0 0 2em;
      color: var(--black-color);
      fill: currentColor;
      cursor: pointer;
      transition: color 0.3s;
    }

    .theme-switcher:hover {
      color: var(--gray-color);
    }

    .main {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    tweet-container {
      margin-bottom: 2em;
    }

    tweet-controller {
      width: 100%;
    }

    footer {
      width: 100%;
      padding: 0.5em 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: var(--white-color);
    }

    .footer-text {
      color: var(--black-color);
      padding: 1em;
    }
  `;

  override render(): TemplateResult {
    return html`
      <header>
        <a href="/">
          <svg
            class="logo"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 60 60"
            xml:space="preserve"
            class="">
            <g>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M59,23.556h-1.072c-0.342-1.593-1.504-2.929-3.435-3.895c-1.467-0.733-3.128-1.105-4.937-1.105H38.046  c-0.016,0-0.03,0.004-0.046,0.004v-0.004H22H10.489c-1.809,0-3.469,0.372-4.937,1.105c-1.931,0.966-3.093,2.301-3.435,3.895H1  c-0.552,0-1,0.448-1,1s0.448,1,1,1h1l0.001,8.054c0.105,1.967,1.546,6.056,6.246,7.446c0.871,0.258,1.79,0.388,2.731,0.388h0  c1.155,0,2.324-0.194,3.476-0.576C19.513,39.187,28,35.353,27.995,28.653c0.01-0.1,0.109-1.19,0.003-2.62  c1.14-0.863,2.922-0.852,4.046,0.033c-0.101,1.391-0.005,2.434,0.002,2.491c0,6.797,8.487,10.631,13.546,12.312  c1.151,0.382,2.32,0.576,3.476,0.576c0.941,0,1.86-0.13,2.731-0.388c4.699-1.391,6.141-5.479,6.247-7.5v-8H59c0.553,0,1-0.448,1-1  S59.553,23.556,59,23.556z M7.707,28.263C7.512,28.458,7.256,28.556,7,28.556s-0.512-0.098-0.707-0.293  c-0.391-0.391-0.391-1.023,0-1.414l4-4c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L7.707,28.263z M18.707,24.263l-7,7  c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l7-7  c0.391-0.391,1.023-0.391,1.414,0S19.098,23.872,18.707,24.263z M27.689,23.912c-0.265-1.187-0.722-2.389-1.481-3.356h7.63  c-0.765,0.974-1.223,2.186-1.487,3.376C30.902,23.25,29.144,23.243,27.689,23.912z M37,28.556c-0.256,0-0.512-0.098-0.707-0.293  c-0.391-0.391-0.391-1.023,0-1.414l4-4c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-4,4  C37.512,28.458,37.256,28.556,37,28.556z M48.707,24.263l-7,7c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293  c-0.391-0.391-0.391-1.023,0-1.414l7-7c0.391-0.391,1.023-0.391,1.414,0S49.098,23.872,48.707,24.263z"></path>
            </g>
          </svg>
        </a>
        <ul>
          <li>
            <a
              class="link"
              type="button"
              title="Share on twitter"
              href="https://twitter.com/intent/tweet?text=Make%20photo%20from%20your%20tweet&url=https://sunglasses.com&in_reply_to=1515025402355490826&via=njfamirm"
              >Share</a
            >
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              x="0"
              y="0"
              viewBox="0 0 48 48"
              xml:space="preserve"
              class="theme-switcher">
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="m38.58 15.755c-.7-7.38-6.82-13.19-14.27-13.53l-.31-.01-.35.01c-7.41.34-13.53 6.15-14.23 13.53-.45 4.91 1.51 9.74 5.25 12.9.78.66 1.43 1.49 1.87 2.41.44.93.67 1.91.67 2.93 0 .45.11.87.28 1.25v3.72c0 1.21.72 2.25 1.76 2.72v1.1c0 1.65 1.34 3 3 3h3.5c1.66 0 3-1.35 3-3v-1.1c1.04-.47 1.76-1.51 1.76-2.72v-3.72c.18-.38.28-.8.28-1.25 0-1.02.23-2 .67-2.93.44-.92 1.09-1.75 1.87-2.41 3.74-3.16 5.7-7.99 5.25-12.9zm-22.58.27c0 .55-.45 1-1 1s-1-.45-1-1c0-5.51 4.49-10 10-10 .55 0 1 .45 1 1s-.45 1-1 1c-4.41 0-8 3.59-8 8zm10.75 26.76c0 .55-.45 1-1 1h-3.5c-.55 0-1-.45-1-1v-.82h5.5zm1.76-3.82c0 .55-.45 1-1 1h-7.02c-.55 0-1-.45-1-1v-2.07c.23.06.47.1.72.1h7.58c.25 0 .49-.04.72-.1z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </li>
        </ul>
      </header>

      <main class="main">
        <tweet-container id="tweet"></tweet-container>
        <tweet-controller id="input"></tweet-controller>
      </main>

      <footer>
          <p class="footer-text">Made with ❤️ by the Sunglasses community</p>
      </footer>
    `;
  }

  protected override firstUpdated(): void {
    const themeSwitcher = this.shadowRoot?.querySelector('.theme-switcher');
    themeSwitcher?.addEventListener('click', this._changeTheme);
  }

  protected _changeTheme(): void {
    // this._logger.incident('theme', 'switch_theme', 'the theme was switched');
    let theme = document.body.getAttribute('data-theme');
    theme === 'dark' ? (theme = 'light') : (theme = 'dark');
    document.body.setAttribute('data-theme', theme);
  }
}

customElements.define('page-home', PageHome);

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}
