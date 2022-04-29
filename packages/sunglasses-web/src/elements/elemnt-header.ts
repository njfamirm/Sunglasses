import {html, css} from 'lit';

import {SunglassesElement} from '../core/sunglasses-element';

import type {TemplateResult} from 'lit';

export default class Header extends SunglassesElement {
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
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      background-color: var(--white-color);
    }

    .logo {
      width: 3.2em;
      height: 100%;
      fill: currentColor;
      color: var(--black-color);
    }

    ul {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      justify-content: flex-end;
    }

    ul > li {
      display: flex;
      align-items: center;
    }

    ul > li > .link {
      color: var(--black-color);
      text-decoration: none;
      font-size: 1.3em;
      font-weight: 400;
      transition: color 0.3s;
    }

    ul > li > .link:hover {
      color: var(--gray-color);
    }

    ul > li {
      list-style: none;
    }

    ul > li > a {
      margin: 0 0 0 2em;
    }

    .theme-switcher {
      width: 1.3em;
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
  `;

  override render(): TemplateResult {
    return html`
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
          <a class="link" title="About Sunglasses" href="/about">About</a>
        </li>
        <li>
          <a
            class="link"
            title="Share on twitter"
            target="_black"
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
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 312.812 312.812"
            xml:space="preserve"
            class="theme-switcher">
            <g>
              <path
                d="M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4    c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4    c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4    c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z"></path>
            </g>
          </svg>
        </li>
      </ul>
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

customElements.define('header-element', Header);

declare global {
  interface HTMLElementTagNameMap {
    'header-element': Header;
  }
}
