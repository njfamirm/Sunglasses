import { html, css, LitElement } from 'lit';

import './tweeph-button.ts';

export default class Input extends LitElement {
  static styles? = css`
  .input {
    font-weight: 500;
    font-size: 1em;
    padding: 10px 25px;
    user-select: none;
    min-height: 40px;
    color: rgb(15, 20, 25);
    background-color: inherit;
    border: none;
    outline: none;
    font-family: 'Roboto Mono', monospace;
    display: inline;
    border-radius: 250px;
    flex-grow: 1;
    background-color: #EFF3F4;
  }

  ::placeholder {
    color: rgba(15, 20, 25, 0.4);
  }

  form {
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #EFF3F4;
    align-items: center;
    border-radius: 250px;
    height: 100%;
  }

  .sumbit-btn {
    font-weight: 600;
    font-size: 1.2em;
    border-radius: 250px;
    padding: 10px 25px;
    user-select: none;
    min-height: 40px;
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
    <form action="genrate/"  id="linkform">
        <input class="input" type="url" spellcheck="false" id="link-box" autocomplete="off" placeholder="Enter tweet link"></input>
        <input class="sumbit-btn" type="submit" value="Genrate" />
    </form>
    `;
  }
}

customElements.define('tweeph-genrate-form', Input);
