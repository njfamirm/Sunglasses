// import domtoimage from 'dom-to-image';
// import {saveAs} from 'file-saver';
import {html, css, LitElement} from 'lit';
import {state} from 'lit/decorators.js';

import type {TemplateResult} from 'lit';

import '../components/sunglasses-tweet.ts';
import '../components/sunglasses-button.ts';
import '../components/sunglasses-input.ts';

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

    sunglasses-input {
      width: 100%;
    }

    :host {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
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
      <div class="panel">
        <sunglasses-input id="input"></sunglasses-input>
        <sunglasses-button class="button">Search</sunglasses-button>
      </div>
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

  // // export tweet
  // private export(tweet: any): void {
  //   if (tweet !== undefined && tweet !== null) {
  //     domtoimage.toBlob(tweet).then((blob) => {
  //       saveAs(blob, 'tweet | sunglasses.com .png');
  //     });
  //   }
  // }
}

customElements.define('sunglasses-home-page', Home);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'sunglasses-home-page': Home;
  }
}
