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
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .controller-container {
      width: 400px;
      height: 70px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 1em;
    }

    .search-form {
      padding: 7px 13px;
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: var(--black-color);
      background-color: var(--white-color);
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

    .color-palette {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .theme {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 5px;
      background-color: var(--white-dark-color);
      cursor: pointer;
    }

    .theme:hover {
      filter: brightness(0.8);
    }

    .theme1 {
      background-image: var(--tweet-theme-1);
    }

    .theme2 {
      background-image: var(--tweet-theme-2);
    }

    .theme3 {
      background-image: var(--tweet-theme-3);
    }

    .theme4 {
      background-image: var(--tweet-theme-4);
    }

    .theme5 {
      background-image: var(--tweet-theme-5);
    }

    .theme6 {
      background-image: var(--tweet-theme-6);
    }

    .theme7 {
      background-image: var(--tweet-theme-7);
    }

    .active-theme {
      filter: brightness(0.6);
    }

    .tweet-size {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .size {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 5px;
      color: var(--black-color);
      background-color: var(--white-color);
      font-size: 1em;
      cursor: pointer;
    }

    .size:hover {
      background-color: var(--white-dark-color);
    }

    .active-size {
      color: var(--gray-color);
      background-color: var(--white-dark-color);
    }

    .controller-container > * {
      display: none;
    }

    .active-session {
      display: flex;
    }

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 200px;
    }

    .session-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      padding: 7px;
      background-color: var(--white-color);
      border: none;
      cursor: pointer;
    }

    .session-button:hover {
      background-color: var(--white-dark-color);
    }

    .session-button:focus {
      border: none;
    }

    .session-icon {
      width: 25px;
      fill: var(--black-color);
      transition: fill 0.3s ease;
    }

    .session-icon:hover {
      fill: var(--gray-color);
    }

    .active-button {
      background-color: var(--white-dark-color);
    }

    .active-button > svg {
      fill: var(--gray-color);
    }
  `;

  inputValue = debugMode === 'debug' ? 'https://twitter.com/sunglasses/status/1' : '';

  override render(): TemplateResult {
    return html`
      <div class="controller-container">
        <form class="search-form active-session" novalidate>
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

        <div class="color-palette">
          <button class="theme theme1 active-theme"></button>
          <button class="theme theme2"></button>
          <button class="theme theme3"></button>
          <button class="theme theme4"></button>
          <button class="theme theme5"></button>
          <button class="theme theme6"></button>
          <button class="theme theme7"></button>
        </div>

        <div class="tweet-size">
          <button class="size size0 active-size">auto</button>
          <button class="size size1">1:1</button>
          <button class="size size2">9:16</button>
          <button class="size size3">1.91:1</button>
          <button class="size size4">4:5</button>
        </div>
      </div>
      <div class="button-container">
        <button class="session-button search-button active-button">
          <svg class="session-icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g>
              <path
                d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"></path>
            </g>
          </svg>
        </button>
        <button class="session-button color-button">
          <svg class="session-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <g>
              <path
                d="M12,15.156A3.156,3.156,0,1,1,15.156,12,3.16,3.16,0,0,1,12,15.156Zm0-4.312A1.156,1.156,0,1,0,13.156,12,1.157,1.157,0,0,0,12,10.844Z"></path>
              <path d="M47.29,5a1,1,0,0,0,0-2,1,1,0,1,0,0,2Z"></path>
              <path
                d="M60.71,3.29A.99.99,0,0,0,60,3H50.28a1,1,0,0,0,0,2H59V19H42.126L20.439,6.481A6,6,0,0,0,19.46,5H43.28a1,1,0,0,0,0-2H9A6,6,0,0,0,3,9V60a.99.99,0,0,0,1,1H20a.99.99,0,0,0,1-1V45.6L28.2,58.07a1.026,1.026,0,0,0,.61.47,1.082,1.082,0,0,0,.259.03,1.057,1.057,0,0,0,.5-.13l13.861-8a1,1,0,0,0,.46-.61.963.963,0,0,0-.1-.76l-1.34-2.33a1.026,1.026,0,0,0-1.37-.37,1,1,0,0,0-.36,1.37v.01l.84,1.45-12.121,7L21,41.591V29.28a1,1,0,0,0-2,0V59H5V9A4.012,4.012,0,0,1,9,5h6a4.012,4.012,0,0,1,4,4V22.29a1,1,0,0,0,2,0v-8.7L37.22,41.68a1,1,0,0,0,.87.5.958.958,0,0,0,.49-.14.991.991,0,0,0,.37-1.36l-2.358-4.088L49.07,43.8a1,1,0,0,0,1.367-.366l8-13.86A1,1,0,0,0,58.07,28.2L45.591,21H60a.99.99,0,0,0,.71-.29A1.033,1.033,0,0,0,61,20V4A1.033,1.033,0,0,0,60.71,3.29ZM56.2,29.436l-7,12.128-14.61-8.435L26.729,19.5,21,9.588V9.114Z"></path>
              <circle cx="20" cy="26.29" r="1"></circle>
              <path d="M40.084,45.649a1.005,1.005,0,1,0-1-1A1,1,0,0,0,40.084,45.649Z"></path>
            </g>
          </svg>
        </button>
        <button class="session-button size-button">
          <svg class="session-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path
                d="M511.343,5.274c-0.865-2.089-2.527-3.752-4.616-4.617C505.684,0.227,504.578,0,503.467,0h-153.6     c-4.717,0-8.533,3.821-8.533,8.533s3.817,8.533,8.533,8.533h133L309.7,190.233c-3.333,3.333-3.333,8.733,0,12.067     c1.667,1.667,3.85,2.5,6.033,2.5s4.367-0.833,6.033-2.5L494.933,29.133v133c0,4.713,3.817,8.533,8.533,8.533     c4.717,0,8.533-3.821,8.533-8.533V8.533C512,7.423,511.774,6.317,511.343,5.274z"></path>
              <path
                d="M190.233,309.7L17.067,482.867v-133c0-4.713-3.817-8.533-8.533-8.533S0,345.154,0,349.867v153.6     c0,1.111,0.227,2.217,0.658,3.26c0.865,2.088,2.527,3.75,4.615,4.615C6.316,511.773,7.422,512,8.533,512h153.6     c4.717,0,8.533-3.821,8.533-8.533s-3.817-8.533-8.533-8.533h-133L202.3,321.767c3.333-3.333,3.333-8.733,0-12.067     C198.967,306.367,193.567,306.367,190.233,309.7z"></path>
            </g>
          </svg>
        </button>
        <button class="session-button export-button">
          <svg class="session-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g>
              <path
                d="m30 24v4c0 1.103-.897 2-2 2h-24c-1.103 0-2-.897-2-2v-4c0-.552.448-1 1-1s1 .448 1 1v4h24v-4c0-.552.448-1 1-1s1 .448 1 1z"></path>
              <path
                d="m8.293 16.707c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l5.293 5.293v-17.586c0-.552.448-1 1-1s1 .448 1 1v17.586l5.293-5.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-7 7c-.396.397-1.031.384-1.415 0z"></path>
            </g>
          </svg>
        </button>
      </div>
    `;
  }

  delayTime: number = debugMode === 'debug' ? 800 : 0;

  @query('.export-button') exportButton: HTMLSelectElement | undefined;
  @query('.search-input') input: HTMLSelectElement | undefined;
  @query('.search-form') form: HTMLSelectElement | undefined;
  @query('.color-palette') colorPalette: HTMLSelectElement | undefined;
  @query('.tweet-size') tweetSize: HTMLSelectElement | undefined;

  override firstUpdated(): void {
    const sessionButton = this.shadowRoot?.querySelectorAll('.session-button');
    sessionButton?.forEach((element: Element) => {
      element.addEventListener('click', () => {
        this._changeSession(element);
      });
    });

    const themeButton = this.shadowRoot?.querySelectorAll('.theme');
    themeButton?.forEach((element: Element) => {
      element.addEventListener('click', () => {
        this._changeTheme(element);
      });
    });

    const sizeButton = this.shadowRoot?.querySelectorAll('.size');
    sizeButton?.forEach((element: Element) => {
      element.addEventListener('click', () => {
        this._changeSize(element);
      });
    });

    // send export signal to tweetContainer
    this.exportButton?.addEventListener('click', () => {
      this._signalDispatch({name: 'exportTweet'});
    });

    // validate link
    this.form?.addEventListener('submit', (e) => {
      // to prevent redirect in action form
      e.preventDefault();
      this._onSearch();
    });
  }

  protected _changeSession(element: Element): void {
    const activeSession = this.shadowRoot?.querySelector('.active-session');
    activeSession?.classList.remove('active-session');

    const button = this.shadowRoot?.querySelector('.active-button');
    button?.classList.remove('active-button');

    const sessionName = element?.classList.value.split(/\s+/)[1];

    switch (sessionName) {
      case 'search-button':
        activeSession?.setAttribute('style', 'display: none;');
        this.form?.setAttribute('style', 'display: flex;');
        this.form?.classList.add('active-session');

        break;
      case 'color-button':
        activeSession?.setAttribute('style', 'display: none;');
        this.colorPalette?.setAttribute('style', 'display: flex;');
        this.colorPalette?.classList.add('active-session');

        break;

      case 'size-button':
        activeSession?.setAttribute('style', 'display: none;');
        this.tweetSize?.setAttribute('style', 'display: flex;');
        this.tweetSize?.classList.add('active-session');
    }

    element.classList.add('active-button');
  }

  protected _changeTheme(element: Element): void {
    const activeTheme = this.shadowRoot?.querySelector('.active-theme');
    activeTheme?.classList.remove('active-theme');

    element.classList.add('active-theme');
    const themeNumber = element?.classList.value.split(/\s+/)[1];

    // send change theme signal to tweetConatiner
    this._signalDispatch({name: 'changeTweetTheme', description: `${themeNumber.at(-1)}`});
  }

  protected _changeSize(element: Element): void {
    const activeSize = this.shadowRoot?.querySelector('.active-size');
    activeSize?.classList.remove('active-size');

    element.classList.add('active-size');
    const tweetSizeNum = element?.classList.value.split(/\s+/)[1];

    // send change theme signal to tweetConatiner
    this._signalDispatch({name: 'changeTweetSize', description: `${tweetSizeNum.at(-1)}`});
  }

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
