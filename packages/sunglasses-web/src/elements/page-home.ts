import {html, css} from 'lit';

import {SunglassesElement} from '../sunglasses-debt/sunglasses-element';

import type {TemplateResult} from 'lit';

import './tweet-container';
import './tweet-controller';
import './element-header';
import './element-footer';

export default class PageHome extends SunglassesElement {
  static override styles? = css`
    * {
      /* margin: 0; */
      /* padding: 0; */
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
        <element-footer></element-footer>
      </footer>
    `;
  }
}

customElements.define('page-home', PageHome);

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}
