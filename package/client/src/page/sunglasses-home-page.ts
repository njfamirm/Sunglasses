import {html, css, LitElement} from 'lit';
import {state} from 'lit/decorators.js';

import type {TemplateResult} from 'lit';

import '../components/sunglasses-tweet.ts';
import '../components/sunglasses-button.ts';
import '../components/sunglasses-panel.ts';

export default class Home extends LitElement {
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

    sunglasses-tweet {
      margin-bottom: 2em;
    }

    sunglasses-panel {
      width: 100%;
    }

    .panel {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .button {
      margin-left: 20px;
    }
  `;

  override render(): TemplateResult {
    return html`
      <sunglasses-tweet id="tweet"></sunglasses-tweet>
      <sunglasses-panel id="input"></sunglasses-panel>
    `;
  }

  @state() theme: 'dark' | 'light' = 'light';

  protected override firstUpdated(): void {
    const themeButton = this.shadowRoot?.querySelector('#theme');
    const tweetElement = this.shadowRoot?.querySelector('#tweet');
    themeButton?.addEventListener('click', () => {
      this.changeTheme(tweetElement);
    });
  }

  private changeTheme(tweetElement: any): void {
    // eslint-disable-next-line no-unused-expressions
    this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light');
    tweetElement?.setAttribute('theme', this.theme);
  }
}

customElements.define('sunglasses-home-page', Home);

declare global {
  interface HTMLElementTagNameMap {
    'sunglasses-home-page': Home;
  }
}
