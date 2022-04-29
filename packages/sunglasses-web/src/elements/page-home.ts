import {html, css} from 'lit';

import {SunglassesElement} from '../core/sunglasses-element';

import type {TemplateResult} from 'lit';

import './tweet-container';
import './tweet-controller';
import './elemnt-header';

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
      width: 100vw;
      padding: 0.2em 1em;
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

    .footer-link {
      color: var(--black-color);
      font-weight: 400;
    }
  `;

  override render(): TemplateResult {
    return html`
      <header>
        <header-element></header-element>
      </header>

      <main class="main">
        <tweet-container id="tweet"></tweet-container>
        <tweet-controller id="input"></tweet-controller>
      </main>

      <footer>
        <p class="footer-text">
          Made with ❤️ by the
          <a class="footer-link" target="_black" href="https://github.com/njfamirm/Sunglasses"
            >Sunglasses community
          </a>
        </p>
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
