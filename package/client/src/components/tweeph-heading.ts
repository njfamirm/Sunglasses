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

    .sharp {
      color: #0f1419;
      font-size: 4em;
      margin-right: 0.2em;
      opacity: 30%;
      font-weight: 400;
      transition: text-shadow 0.5s ease;
      text-decoration: none;
    }
  `;

  render() {
    /**
    * @todo fix id space!
    * @todo visible # when h hovered
    */
    return html`<a href="#${this.innerHTML.toString()}">
          <span class="sharp">#</span>
          <h2 id=${this.innerHTML.toString()}>${this.innerHTML.toString()}</h2>
        </a>`;
  }
}

customElements.define('tweeph-heading', Heading);
