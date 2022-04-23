import {html, css, LitElement} from 'lit';
import {state} from 'lit/decorators.js';

import type {TemplateResult} from 'lit';

import './tweet-container';
import './tweet-controller';

export default class PageHome extends LitElement {
  static override styles? = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
    }

    *:focus-visible {
      outline: none;
    }

    :host {
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
      <tweet-container id="tweet"></tweet-container>
      <tweet-controller id="input"></tweet-controller>
    `;
  }

  @state() theme: 'dark' | 'light' = 'light';

  protected override firstUpdated(): void {
    const themeButton = this.shadowRoot?.querySelector('#theme');
    const tweetElement = this.shadowRoot?.querySelector('#tweet');
    themeButton?.addEventListener('click', () => {
      this.changeTheme(<Element>tweetElement);
    });
  }

  private changeTheme(tweetElement: Element): void {
    this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light');
    tweetElement?.setAttribute('theme', this.theme);
  }
}

customElements.define('page-home', PageHome);

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}
