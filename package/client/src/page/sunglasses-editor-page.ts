import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import {html, css, LitElement} from 'lit';
import {state} from 'lit/decorators.js';

import type {TemplateResult} from 'lit';

import '../components/sunglasses-tweet.ts';
import '../components/sunglasses-button.ts';

export default class Editor extends LitElement {
  static override styles? = css`
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

  override render():TemplateResult {
    return html`
    <sunglasses-tweet id="tweet"></sunglasses-tweet>
    <div class="panel">
        <sunglasses-button id="export">Export</sunglasses-button>
    </div>
    `;
  }

  @state() theme : 'dark' | 'light' = 'light'

  protected override firstUpdated():void {
    const themeButton = this.shadowRoot?.querySelector('#theme');
    const tweetElement = this.shadowRoot?.querySelector('#tweet');
    const ExportButton = this.shadowRoot?.querySelector('#export');
    themeButton?.addEventListener('click', () => {
      this.changeTheme(tweetElement);
    });
    ExportButton?.addEventListener('click', () => {
      this.export(tweetElement!.shadowRoot!.children[0]);
    });
  }

  private changeTheme(tweetElement: any):void {
    // eslint-disable-next-line no-unused-expressions
    this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light';
    tweetElement?.setAttribute('theme', this.theme);
  }

  // export tweet
  private export(tweet: any):void {
    if (tweet !== undefined && tweet !== null) {
      domtoimage.toBlob(tweet).then((blob) => {
        saveAs(blob, 'tweet | sunglasses.com .png');
      });
    }
  }
}

customElements.define('sunglasses-editor-page', Editor);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'sunglasses-editor-page': Editor;
  }
}
