import { html, css, LitElement } from 'lit';
import { query } from 'lit/decorators.js';

import './tweeph-button.ts';

export default class Input extends LitElement {
  static styles? = css`
  form {
    width: 80vw;
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

  .input {
    font-weight: 500;
    font-size: 1em;
    padding: 10px 25px;
    user-select: none;
    color: rgb(15, 20, 25);
    background-color: inherit;
    border: none;
    outline: none;
    font-family: 'Roboto Mono', monospace;
    display: inline;
    border-radius: 250px;
    flex-grow: 1;
    background-color: #EFF3F4;
    transition: width 1s ease, padding 1s ease;
  }


  .sumbit-btn {
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
  }

  .sumbit-btn:hover {
    background-color: #1A8CD8;
  }

  .sumbit-btn:focus {
    border: none;
  }
  `

  /**
   * @todo use tweeph-button for submit
   */
  render() {
    return html`
    <form action="#" novalidate>
        <input class="input" type="url" spellcheck="false" id="link-box" autocomplete="off" placeholder="https://twitter.com/njfamirm/status/1486041539281362950"></input>
        <button class="sumbit-btn">Genrate</button>
    </form>
    `;
  }

  @query('button') button: HTMLSelectElement | undefined;

  @query('input') input: HTMLSelectElement | undefined;

  @query('form') form: HTMLSelectElement | undefined;

  firstUpdated() {
    this.form?.addEventListener('submit', () => {
      const ID = this.input?.value;
      if (ID !== undefined && ID !== '' && this.checkValidValue(ID)) {
        this.checkExistID(ID);
        /**
         * @todo: fix !
         */
        this.input?.setAttribute('style', 'width: 0; padding: 0;');
        this.form?.setAttribute('style', 'width: 100%;');
        this.button!.innerHTML = 'Checking';
      }
    });
  }

  // eslint-disable-next-line no-unused-vars
  private checkExistID(_ID: string) {
    //
  }

  /**
   * @todo fix the http & www requirement
   */
  private checkValidValue(value: string): boolean {
    const match = value.match(/(http(s)?:\/\/.)?(www\.)?twitter.com\/[-a-zA-Z0-9@:%._\\+~#=]*\/status\d*/g);
    if (match !== null) {
      return true;
    }
    return false;
  }
}

customElements.define('tweeph-genrate-form', Input);
