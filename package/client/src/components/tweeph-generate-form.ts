import { html, css, LitElement } from 'lit';
import { query } from 'lit/decorators.js';

import './tweeph-button.ts';

export default class Input extends LitElement {
  static styles? = css`
  :host {
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #EFF3F4;
    align-items: center;
    border-radius: 250px;
    height: 57px;
    transition: width 1s ease;
  }

  ::placeholder {
    color: rgba(15, 20, 25, 0.3);
  }

  input {
    width: 70vw;
    font-weight: 500;
    font-size: 1em;
    padding: 10px 25px;
    user-select: none;
    color: rgb(15, 20, 25);
    background-color: inherit;
    border: none;
    outline: none;
    font-family: 'Roboto Mono', monospace;
    border-radius: 250px;
    background-color: #EFF3F4;
    transition: width 1s ease, padding 1s ease;
  }


  button {
    font-weight: 600;
    font-size: 1.2em;
    border-radius: 250px;
    padding: 10px 25px;
    user-select: none;
    min-width: 36px;
    background-color: rgb(29, 155, 240);
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
    height: 100%;
    transition: background-color 3s cubic-bezier(.6,.32,.06,.74) 0s;
  }

  button:hover {
    background-color: #1A8CD8;
  }

  button:focus {
    border: none;
  }
  `

  /**
   * @TODO use tweeph-button for submit
   */
  render() {
    return html`
    <form action="#" novalidate>
        <input class="input" type="url" spellcheck="false" id="link-box" autocomplete="off" placeholder="https://twitter.com/njfamirm/status/1486041539281362950"></input>
        <button class="sumbit-btn">generate</button>
    </form>
    `;
  }

  @query('button') button: HTMLSelectElement | undefined;

  @query('input') input: HTMLSelectElement | undefined;

  @query('form') form: HTMLSelectElement | undefined;

  firstUpdated() {
    this.form?.addEventListener('submit', (e) => {
      // to prevent redirect in action form
      e.preventDefault();
      this.sumbit();
    });
  }

  private sumbit() {
    const value = this.input?.value;
    if (value !== undefined && value !== '') {
      this.changeInput('Checking');
      const ID = this.checkValidValue(value);
      if (ID !== null) {
        if (this.checkExistID(ID)) {
          this.changeInput('OK');
          window.location.href = `/t/${ID}`;
        }
        this.changeInput('NotValid');
        /**
           * @TODO: sleep 1 second and change to generate
           */
        this.changeInput('generate');
      }
    }
  }

  private changeInput(inner: string) {
    switch (inner) {
      case 'NotValid':
        this.button!.innerHTML = 'Not valid';
        this.button!.style.backgroundColor = 'rgb(29, 155, 240)';
        break;
      case 'Checking':
        this.input!.value = '';
        this.button!.innerHTML = 'Checking';
        this.button!.style.backgroundColor = 'rgb(15, 20, 25)';
        this.input!.style.width = '0';
        this.input!.style.padding = '0';
        this.button!.style.cursor = 'default';
        break;
      case 'OK':
        this.button!.innerHTML = 'Redirecting';
        this.button!.style.backgroundColor = 'rgb(29, 155, 240)';
        break;
      default:
        this.button!.innerHTML = 'Generate';
        this.button!.style.backgroundColor = 'rgb(29, 155, 240)';
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
    const match = value.match(/^(http(s)?:\/\/)?(www\.)?twitter.com\/[-a-zA-Z0-9@:%._\\+~#=]*\/status\/\d*$/g);
    if (match !== null) {
      return (<any>(value.match(/\d*$/g)))[0];
    }
    return null;
  }
}

customElements.define('tweeph-generate-form', Input);
