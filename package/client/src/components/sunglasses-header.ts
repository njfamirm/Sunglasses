import { html, css, LitElement } from 'lit';

export default class Header extends LitElement {
  static styles? = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus-visible {
    outline: none;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100vw;
    box-sizing: border-box;
    padding: 0.2em 2em;
    background-color: var(--white-dark-color);
  }

  .logo {
    height: 100%;
    width: 3.2em;
    color: var(--black-color);
    fill: currentColor;
  }

  svg:focus {
    border: none;
  }

  p {
    order: 2;
    font-size: 1.4em;
    font-weight: 400;
    margin-left: 0.3em;
    color: var(--gray-color);
    user-select: none;
  }

  ul {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    cursor: pointer;
    user-select: none;
    text-decoration: none;
  }

  .header-link {
    text-decoration: none;
    font-size: 1.3em;
    color: var(--black-color);
    transition: color 0.3s;
    font-weight: 400;
  }

  .header-link:hover {
    color: var(--gray-color);
  }

  li {
    padding: 0 0 0 3em;
    list-style: none;
  }
  `;

  render() {
    return html`
        <header>
          <a href="/">
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 60 60" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="M59,23.556h-1.072c-0.342-1.593-1.504-2.929-3.435-3.895c-1.467-0.733-3.128-1.105-4.937-1.105H38.046  c-0.016,0-0.03,0.004-0.046,0.004v-0.004H22H10.489c-1.809,0-3.469,0.372-4.937,1.105c-1.931,0.966-3.093,2.301-3.435,3.895H1  c-0.552,0-1,0.448-1,1s0.448,1,1,1h1l0.001,8.054c0.105,1.967,1.546,6.056,6.246,7.446c0.871,0.258,1.79,0.388,2.731,0.388h0  c1.155,0,2.324-0.194,3.476-0.576C19.513,39.187,28,35.353,27.995,28.653c0.01-0.1,0.109-1.19,0.003-2.62  c1.14-0.863,2.922-0.852,4.046,0.033c-0.101,1.391-0.005,2.434,0.002,2.491c0,6.797,8.487,10.631,13.546,12.312  c1.151,0.382,2.32,0.576,3.476,0.576c0.941,0,1.86-0.13,2.731-0.388c4.699-1.391,6.141-5.479,6.247-7.5v-8H59c0.553,0,1-0.448,1-1  S59.553,23.556,59,23.556z M7.707,28.263C7.512,28.458,7.256,28.556,7,28.556s-0.512-0.098-0.707-0.293  c-0.391-0.391-0.391-1.023,0-1.414l4-4c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L7.707,28.263z M18.707,24.263l-7,7  c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l7-7  c0.391-0.391,1.023-0.391,1.414,0S19.098,23.872,18.707,24.263z M27.689,23.912c-0.265-1.187-0.722-2.389-1.481-3.356h7.63  c-0.765,0.974-1.223,2.186-1.487,3.376C30.902,23.25,29.144,23.243,27.689,23.912z M37,28.556c-0.256,0-0.512-0.098-0.707-0.293  c-0.391-0.391-0.391-1.023,0-1.414l4-4c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-4,4  C37.512,28.458,37.256,28.556,37,28.556z M48.707,24.263l-7,7c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293  c-0.391-0.391-0.391-1.023,0-1.414l7-7c0.391-0.391,1.023-0.391,1.414,0S49.098,23.872,48.707,24.263z"></path></svg>
          </a>
          <ul>
            <li><a class="header-link" href="/generate">Generate</a></li>
            <li><a class="header-link" href="/about">About</a></li>
          </ul>
        </header>
      `;
  }
}

customElements.define('sunglasses-header', Header);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'sunglasses-header': Header;
  }
}
