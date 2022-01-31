import { css, html, LitElement } from 'lit';

export default class Heading extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
      cursor: pointer;
    }

    h2 {
      font-weight: 600;
      color: #14171a;
      user-select: none;
      display: block;
      font-size: 5em;
      display: inline;
    }
  `;

  render() {
    /**
    * @todo fix id space!
    * @todo visible # when h hovered
    */
    return html`
      <a href="#${this.innerHTML.toString()}">
        <h2 id=${this.innerHTML.toString()}>${this.innerHTML.toString()}</h2>
      </a>`;
  }
}

customElements.define('tweeph-heading', Heading);
