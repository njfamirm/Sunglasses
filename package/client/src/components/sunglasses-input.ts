import {html, css, LitElement} from 'lit';
import {property, query} from 'lit/decorators.js';

import type {TemplateResult} from 'lit';

export default class Input extends LitElement {
  static override styles? = css`
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
      background-color: var(--white-color);
      align-items: center;
      border-radius: 250px;
      height: 57px;
      transition: width 1s ease;
      box-shadow: var(--shadow);
    }

    ::placeholder {
      color: var(--light-gray-color);
    }

    input {
      width: 100%;
      font-size: 1em;
      padding: 10px 25px;
      user-select: none;
      color: var(--black-color);
      background-color: inherit;
      border: none;
      outline: none;
      border-radius: 250px;
      background-color: inherit;
      transition: width 1s ease, padding 1s ease;
    }

    #export {
      font-weight: 700;
      font-size: 1.2em;
      border-radius: 250px;
      padding: 10px 25px;
      user-select: none;
      width: 140px;
      background-color: var(--dark-gray-color);
      color: var(--white-color);
      border: none;
      cursor: pointer;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 3s cubic-bezier(0.6, 0.32, 0.06, 0.74) 0s;
    }

    button:hover {
      background-color: var(--black-color);
    }

    button:focus {
      border: none;
    }
  `;

  override render(): TemplateResult {
    return html`
    <form action="#" novalidate>
        <input class="input" type="url" spellcheck="false" id="link-box"
          autocomplete="off" placeholder="https://twitter.com/njfamirm/status/1486041539281362950"></input>
    </form>
    `;
  }

  @query('button') button: HTMLSelectElement | undefined;

  @query('input') input: HTMLSelectElement | undefined;

  @query('form') form: HTMLSelectElement | undefined;

  @property({type: String}) exported: 'false' | 'ok' = 'false'

  override firstUpdated(): void {
    const inputElement = this.shadowRoot!.querySelector('#export');
    inputElement?.addEventListener('click', () => {
      console.log('fired');
      this.exported = 'ok';
    });

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
        if (this.checkExistID(ID)) {
          this.changeInput('OK');
        } else {
          this.changeInput('NotValid');
          /**
           * @TODO: sleep 1 second and change to generate
           */
          this.changeInput('Generate');
        }
      } else {
        this.changeInput('NotValid');
        /**
         * @TODO: sleep 1 second and change to generate
         */
        this.changeInput('Generate');
      }
    }
  }

  private changeInput(inner: string): void {
    switch (inner) {
      case 'NotValid':
        this.button!.innerHTML = 'Not valid';
        this.button!.style.backgroundColor = 'var(--light-gray-color)';
        break;
      case 'Checking':
        this.input!.value = '';
        this.button!.innerHTML = 'Checking';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.input!.style.width = '0';
        this.input!.style.padding = '0';
        this.button!.style.cursor = 'default';
        break;
      case 'OK':
        this.button!.innerHTML = 'Redirecting';
        this.button!.style.backgroundColor = 'var(--gray-color)';
        break;
      default:
        this.button!.innerHTML = 'Generate';
        this.button!.style.backgroundColor = 'var(--gray-color)';
        this.input!.style.width = '70vw';
        this.input!.style.padding = '10px 25px';
        this.button!.style.cursor = 'pointer';
    }
  }

  // eslint-disable-next-line no-unused-vars
  private checkExistID(_ID: string): boolean {
    return true;
  }

  private checkValidValue(value: string): string | null {
    const match = value.match(
        /^(http(s)?:\/\/)?(www\.)?twitter.com\/[-a-zA-Z0-9@:%._\\+~#=]*\/status\/\d*$/g,
    );
    if (match !== null) {
      return (<any>value.match(/\d*$/g))[0];
    }
    return null;
  }
}

customElements.define('sunglasses-input', Input);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'sunglasses-input': Input;
  }
}
