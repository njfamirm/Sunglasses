import { html, css, LitElement } from 'lit';

export default class Footer extends LitElement {
  static styles? = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus-visible {
    outline: none;
  }

  p::selection {
    color: var(--white-dark-color);
    background-color: var(--black-color);
  }

  :host {
    width: 100vw;
  }


  footer {
    border-top: 1px solid #b5b5b547;
    padding: 0.5em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: var(--white-dark-color);
  }

  p {
    color: var(--black-color);
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    padding: 1em;
  }

  svg {
    color: var(--gray-color);
    fill: currentColor;
    height: 1.5em;
    width: 1.5em;
    transition: color 0.3s;
  }

  svg:hover {
    color: var(--dark-gray-color);
    fill: currentColor;
  }
  `

  render() {
    return html`
      <footer>
        <p>CopyRight 2022 Tweeph</p>
        <div class="logo">
          <a title="view source" href="https://github.com/njfamirm/Sunglasses" target="_blank">
            <svg title="Find on github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a title="njfamirm's twitter " href="https://twitter.com/Njfamirm" target="_blank">
            <svg viewBox="0 0 24 24" focusable="false" role="presentation" class="css-1im46kq"><path fill="currentcolor" d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"></path></svg>
          </a>
        </div>
      </footer>
      `;
  }
}

customElements.define('sunglasses-footer', Footer);
