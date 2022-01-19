import { css, html, LitElement } from 'lit';

export default class Header extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
    }

    h2 {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      color: #14171a;
      user-select: none;
      display: block;
      font-size: 5em;
      display: inline;
    }

    .sharp {
      color: #0f1419;
      font-size: 4em;
      margin-right: 0.2em;
      opacity: 30%;
      font-weight: 400;
      cursor: pointer;
      transition: text-shadow 0.5s ease;
      text-decoration: none;
    }
  `;

  // Render the UI as a function of component state
  render() {
    // fix id space!
    return html`<a href="#${this.innerHTML.toString()}">
          <span class="sharp">#</span>
          <h2 id=${this.innerHTML.toString()}>${this.innerHTML.toString()}</h2>
        </a>`;
  }
}

customElements.define('tweeph-h', Header);
