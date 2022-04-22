import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import {html, css, LitElement} from 'lit';
import {property, query} from 'lit/decorators.js';

import type {TemplateResult} from 'lit';

export default class Panel extends LitElement {
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

    form {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 250px;
      height: 57px;
      transition: width 1s ease;
    }

    form > * {
      box-shadow: var(--shadow);
    }

    ::placeholder {
      color: var(--light-gray-color);
    }

    input {
      width: 100%;
      height: 100%;
      font-size: 1em;
      padding: 10px 25px;
      user-select: none;
      color: var(--black-color);
      background-color: var(--white-color);
      outline: none;
      border-radius: 250px;
      background-color: inherit;
      border: 0 solid #ffffff00;
      transition: width 1s ease, padding 1s ease, border 0.5s ease;
    }

    button {
      width: 180px;
      padding-left: 10px;
      font-weight: 700;
      margin-left: 10px;
      font-size: 1.2em;
      border-radius: 250px;
      padding: 10px 25px;
      user-select: none;
      background-color: var(--dark-gray-color);
      color: var(--white-color);
      border: none;
      cursor: pointer;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 1s cubic-bezier(0.6, 0.32, 0.06, 0.74) 0s;
    }

    button:hover {
      background-color: var(--black-color);
    }

    button:focus {
      border: none;
    }
  `;
  tweet: any;

  override render(): TemplateResult {
    return html`
    <form novalidate>
        <input class="input" type="url" spellcheck="false" id="link-box"
          autocomplete="off" placeholder="https://twitter.com/njfamirm/status/1486041539281362950"></input>
        <button id="export">Search</button>
    </form>
    `;
  }

  @query('button') button: HTMLSelectElement | undefined;

  @query('input') input: HTMLSelectElement | undefined;

  @query('form') form: HTMLSelectElement | undefined;

  @property({type: Boolean, attribute: true}) export = false;

  override firstUpdated(): void {
    this.tweet = document
      .querySelector('body > sunglasses-home-page')!
      .shadowRoot!.querySelector('#tweet')?.shadowRoot?.children[0];
    this.form?.addEventListener('submit', (e) => {
      // to prevent redirect in action form
      e.preventDefault();
      this.sumbit();
    });
  }

  private sumbit(): void {
    const value = this.input?.value;
    if (value !== undefined && value !== '') {
      const ID = this.checkValidValue(value);
      if (ID !== null) {
        this.changeInput('Checking');
        delay(2000).then(() => {
          if (this.checkExistID(ID)) {
            this.changeInput('OK');
          } else {
            this.changeInput('NotValid');
            delay(3000).then(() => {
              this.changeInput('');
            });
          }
        });
      } else {
        this.changeInput('NotValid');
        delay(3000).then(() => {
          this.changeInput('');
        });
      }
    }
  }

  private changeInput(inner: string): void {
    switch (inner) {
      case 'NotValid':
        this.input!.style.border = '0.5px solid var(--red-color)';
        break;
      case 'Checking':
        this.button!.innerHTML = 'Searching';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.button!.style.cursor = 'default';
        this.input!.style.border = '0.5px solid var(--green-color)';
        break;
      case 'OK':
        this.button!.innerHTML = 'Exporting';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.exportTweet(this.tweet);
        break;
      default:
        this.button!.innerHTML = 'Search';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.button!.style.cursor = 'pointer';
        this.input!.value = '';
        this.input!.style.border = '0 solid #ffffff00';
    }
  }

  // eslint-disable-next-line no-unused-vars
  private checkExistID(_ID: string): boolean {
    return true;
  }

  private checkValidValue(value: string): string | null {
    const match = value.match(
      /^(http(s)?:\/\/)?(www\.)?twitter.com\/[-a-zA-Z0-9@:%._\\+~#=]*\/status\/\d*$/g
    );
    if (match !== null) {
      return (<any>value.match(/\d*$/g))[0];
    }
    return null;
  }

  // export tweet
  private exportTweet(tweet: any): void {
    if (tweet !== undefined && tweet !== null) {
      domtoimage.toBlob(tweet).then((blob) => {
        saveAs(blob, 'tweet | sunglasses.com .png');
      });
      delay(2000).then(() => {
        this.changeInput('');
      });
    }
  }
}

customElements.define('sunglasses-panel', Panel);

declare global {
  interface HTMLElementTagNameMap {
    'sunglasses-panel': Panel;
  }
}

function delay(time: number): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, time));
}
