import {html, css} from 'lit';

import {SunglassesElement} from './sunglasses-element/sunglasses-element';

import type {TemplateResult} from 'lit';

export default class Footer extends SunglassesElement {
  static override styles? = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *:focus-visible {
      outline: none;
    }

    a {
      cursor: pointer;
      user-select: none;
      text-decoration: none;
    }

    :host {
      min-width: 100vw;
      padding: 0.5em 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: var(--white-color);
    }

    .footer-text {
      color: var(--black-color);
      padding: 1em;
    }

    .footer-link {
      color: var(--black-color);
      font-weight: 400;
    }
  `;

  override render(): TemplateResult {
    return html`
      <p class="footer-text">
        Made with ❤️ by the
        <a class="footer-link" target="_black" href="https://github.com/njfamirm/Sunglasses"
          >Sunglasses community
        </a>
      </p>
    `;
  }
}

customElements.define('element-footer', Footer);

declare global {
  interface HTMLElementTagNameMap {
    'element-footer': Footer;
  }
}
