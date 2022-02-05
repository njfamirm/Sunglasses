import { html, css, LitElement } from 'lit';
import { state } from 'lit/decorators.js';

import '../components/sunglasses-tweet.ts';
import '../components/sunglasses-button.ts';

export default class Editor extends LitElement {
  static styles? = css`
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

  :host {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .panel {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 100px;
    padding: 5px;
  }

  .theme {
    display: flex;
    align-items: center;
  }
  `;

  render() {
    return html`
    <sunglasses-tweet id="tweet"></sunglasses-tweet>
    <div class="panel">
      <div class="theme">
        <!-- fix -->
        <!-- <sunglasses-button id="theme">${this.theme.toString()}</sunglasses-button> -->
        <sunglasses-button id="theme">Change Theme</sunglasses-button>
      </div>
      <a href="/export">
        <sunglasses-button>Export</sunglasses-button>
      </a>
    </div>
    `;
  }

  @state() theme : 'dark' | 'light' = 'light'

  protected firstUpdated() {
    const themeButton = this.shadowRoot?.querySelector('#theme');
    const tweetElement = this.shadowRoot?.querySelector('#tweet');
    themeButton?.addEventListener('click', () => { this.changeTheme(tweetElement); });
  }

  private changeTheme(tweetElement: Element | null |undefined) {
    // eslint-disable-next-line no-unused-expressions
    this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light';
    tweetElement?.setAttribute('theme', this.theme);
  }
}

customElements.define('sunglasses-editor-page', Editor);
