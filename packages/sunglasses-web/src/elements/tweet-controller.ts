import {html, css} from 'lit';
import {query} from 'lit/decorators.js';

import {debugMode} from '../config/config.json';
import {delay} from '../core/utils/delay';
import {SunglassesElement} from '../sunglasses-debt/sunglasses-element';

import type {TemplateResult} from 'lit';

export default class TweetController extends SunglassesElement {
  static override styles? = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ::placeholder {
      color: var(--light-gray-color);
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
      font-weight: 400;
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

  inputValue = debugMode === 'debug' ? 'https://twitter.com/sunglasses/status/1' : '';

  override render(): TemplateResult {
    return html`
      <form class="search-form" novalidate>
        <input
          class="search-input"
          type="url"
          placeholder="https://twitter.com/njfamirm/status/1486041539281362950"
          autocomplete="off"
          spellcheck="false"
          value=${this.inputValue} />
        <button class="search-button">Search</button>
      </form>
    `;
  }

  @query('.search-button') button: HTMLSelectElement | undefined;
  @query('.search-input') input: HTMLSelectElement | undefined;
  @query('.search-form') form: HTMLSelectElement | undefined;

  override firstUpdated(): void {
    this.form?.addEventListener('submit', (e) => {
      // to prevent redirect in action form
      e.preventDefault();
      this._onSearch();
    });
  }

  delayTime: number = debugMode === 'debug' ? 800 : 0;

  protected _onSearch(): void {
    const value = this.input?.value;

    if (value !== undefined && value !== '') {
      const ID = this._checkValidValue(value);

      if (ID !== null) {
        this._changeButtonText('Searching');
        delay(this.delayTime).then(() => {
          // send fetch signal to tweet-container
          this._signalDispatch({name: 'fetchTweet', description: value});
          this._changeButtonText('OK');

          this._changeButtonText(''); // default
        });
      } else {
        this._changeButtonText('NotValid');
        delay(1000).then(() => {
          this._changeButtonText(''); // default
        });
      }
    }
  }

  protected _changeButtonText(inner: string): void {
    this._logger.incident('style', 'change_button_text', 'change button text in searching');

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
      case 'OK': // change to controller mode
        this.button!.innerHTML = 'Exporting';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        // send fetch signal to tweet-container
        this._signalDispatch({name: 'exportTweet'});
        break;
      default:
        this.button!.innerHTML = 'Search';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.button!.style.cursor = 'pointer';
        this.input!.value = '';
        this.input!.style.border = '0 solid #ffffff00';
    }
  }

  protected _checkValidValue(value: string): string | null {
    const match = value.match(
      /^(http(s)?:\/\/)?(www\.)?twitter.com\/[-a-zA-Z0-9@:%._\\+~#=]*\/status\/\d*$/g,
    );
    if (match !== null) {
      const id = value.match(/\d*$/g);
      if (id != null) {
        this._logger.incident('validate', 'valid_url', `the id of tweets is equal to ${id[0]}`);
        return id[0];
      }
    }
    this._logger.incident('validate', 'not_valid_url', 'tweet url not valid');
    return null;
  }
}

customElements.define('tweet-controller', TweetController);

declare global {
  interface HTMLElementTagNameMap {
    'tweet-controller': TweetController;
  }
}
