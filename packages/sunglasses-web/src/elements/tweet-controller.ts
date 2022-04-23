import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import {html, css} from 'lit';
import {query} from 'lit/decorators.js';

import {SunglassesElement} from '../core/sunglasses-element';
import {delay} from '../core/utils/delay';

import type {TemplateResult} from 'lit';

export default class TweetController extends SunglassesElement {
  static override styles? = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
    }

    :host {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .search-form {
      width: 100%;
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 250px;
      transition: width 1s ease;
    }

    .search-form > * {
      box-shadow: var(--shadow);
    }

    ::placeholder {
      color: var(--light-gray-color);
    }

    .search-input {
      width: 100%;
      height: 100%;
      padding: 10px 25px;
      color: var(--black-color);
      background-color: var(--white-color);
      background-color: inherit;
      border: 0 solid #ffffff00;
      font-size: 1em;
      user-select: none;
      border-radius: 250px;
      outline: none;
      transition: width 1s ease, padding 1s ease, border 0.5s ease;
    }

    .search-button {
      width: 180px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10px;
      margin-left: 10px;
      border-radius: 250px;
      padding: 10px 25px;
      background-color: var(--dark-gray-color);
      color: var(--white-color);
      border: none;
      font-size: 1.2em;
      font-weight: 700;
      user-select: none;
      cursor: pointer;
      transition: background-color 1s cubic-bezier(0.6, 0.32, 0.06, 0.74) 0s;
    }

    .search-button:hover {
      background-color: var(--black-color);
    }

    .search-button:focus {
      border: none;
    }
  `;

  override render(): TemplateResult {
    return html`
      <form class="search-form" novalidate>
        <input
          class="search-input"
          type="url"
          spellcheck="false"
          id="link-box"
          autocomplete="off"
          placeholder="https://twitter.com/njfamirm/status/1486041539281362950"
        />
        <button class="search-button">Search</button>
      </form>
    `;
  }

  @query('.search-button') button: HTMLSelectElement | undefined;
  @query('.search-input') input: HTMLSelectElement | undefined;
  @query('.search-form') form: HTMLSelectElement | undefined;

  tweet: any;

  override firstUpdated(): void {
    this.tweet = document
      .querySelector('body > page-home')!
      .shadowRoot!.querySelector('#tweet')?.shadowRoot?.children[0];

    this.form?.addEventListener('submit', (e) => {
      // to prevent redirect in action form
      e.preventDefault();
      this._search();
    });
  }

  protected _search(): void {
    const value = this.input?.value;

    if (value !== undefined && value !== '') {
      const ID = this._checkValidValue(value);

      if (ID !== null) {
        this._changeButtonText('Searching');
        delay(2000).then(() => {
          // call function in tweet container
          if (this._fetchTweet(ID)) {
            this._changeButtonText('OK');
          } else {
            this._changeButtonText('NotValid');
            delay(3000).then(() => {
              this._changeButtonText('');
            });
          }
        });
      } else {
        this._changeButtonText('NotValid');
        delay(3000).then(() => {
          this._changeButtonText('');
        });
      }
    }
  }

  protected _changeButtonText(inner: string): void {
    this._logger.incident(
      'style',
      'change_button_text',
      'change button text in searching'
    );

    switch (inner) {
      case 'NotValid':
        this.input!.style.border = '0.5px solid var(--red-color)';
        break;
      case 'Searching':
        this.button!.innerHTML = 'Searching';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.button!.style.cursor = 'default';
        this.input!.style.border = '0.5px solid var(--green-color)';
        break;
      case 'OK':
        this.button!.innerHTML = 'Exporting';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this._exportTweet(this.tweet);
        break;
      default:
        this.button!.innerHTML = 'Search';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.button!.style.cursor = 'pointer';
        this.input!.value = '';
        this.input!.style.border = '0 solid #ffffff00';
    }
  }

  protected _fetchTweet(_ID: string): boolean {
    this._logger.incident('fetchTweet', 'fetch_tweet', 'tweet fetch from /api');
    return true;
  }

  protected _checkValidValue(value: string): string | null {
    const match = value.match(
      /^(http(s)?:\/\/)?(www\.)?twitter.com\/[-a-zA-Z0-9@:%._\\+~#=]*\/status\/\d*$/g
    );
    if (match !== null) {
      this._logger.incident('validate', 'valid_url', 'tweet url valid');
      return (<any>value.match(/\d*$/g))[0];
    }
    this._logger.incident('validate', 'not_valid_url', 'tweet url not valid');
    return null;
  }

  // export tweet
  protected _exportTweet(tweet: any): void {
    if (tweet !== undefined && tweet !== null) {
      this._logger.incident('export', 'export_tweet', 'exporting tweet');
      domtoimage.toBlob(tweet).then((blob) => {
        saveAs(blob, 'tweet | sunglasses.com .png');
      });
      delay(2000).then(() => {
        this._changeButtonText('');
      });
    }
  }
}

customElements.define('tweet-controller', TweetController);

declare global {
  interface HTMLElementTagNameMap {
    'tweet-controller': TweetController;
  }
}
