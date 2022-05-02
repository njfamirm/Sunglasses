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
      width: 65%;
      height: 44px;
      padding: 7px 13px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 250px;
      color: var(--black-color);
      background-color: var(--white-color);
      box-shadow: var(--shadow);
      outline: 0 solid #ffffff00;
      border-radius: 5px;
      transition: outline 0.5s ease;
    }

    .search-input {
      height: 100%;
      flex-grow: 1;
      margin-left: 0.3em;
      color: inherit;
      background-color: inherit;
      border: none;
      outline: none;
      font-size: 1.2em;
    }

    .search-icon {
      width: 1.5em;
      fill: var(--black-color);
      transition: fill 0.3s ease;
    }

    .search-icon:hover {
      fill: var(--gray-color);
    }
  `;

  inputValue = debugMode === 'debug' ? 'https://twitter.com/sunglasses/status/1' : '';

  override render(): TemplateResult {
    return html`
      <form class="search-form" novalidate>
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <g>
            <path
              d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"></path>
          </g>
        </svg>
        <input
          class="search-input"
          type="url"
          placeholder="Type tweet link"
          autocomplete="off"
          spellcheck="false"
          value=${this.inputValue} />
      </form>
    `;
  }

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
        this.form!.style.outline = '0.5px solid var(--red-color)';
        break;
      case 'Searching':
        this.form!.style.outline = '0.5px solid var(--green-color)';
        break;
      case 'OK': // change to controller mode
        // send fetch signal to tweet-container
        this._signalDispatch({name: 'exportTweet'});
        break;
      default:
        this.input!.value = '';
        this.form!.style.outline = '0 solid #ffffff00';
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
