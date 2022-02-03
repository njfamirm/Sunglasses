import { css, html, LitElement } from 'lit';

export default class Tweet extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .tweet-container {
      padding: 20px 20px;
      background-color: #15202b;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 600px;
      border-radius: 5px;
    }

    .tweet-container > * {
      color: #fff;
    }

    .avatar {
      display: flex;
      align-items: center;
    }

    .user-info {
      margin-left: 12px;
    }

    .name {
      font-weight: 900;
    }

    .username {
      color: var(--light-gray-color);
    }

    .avatar {
      margin-bottom: 4px;
    }

    .avatar > * {
      display: inline;
    }

    .avatar-image {
      width: 48px;
      border-radius: 100px;
    }

    .tweet-text {
      font-weight: 400;
      font-size: 23px;
      margin-top: 12px;
    }

    /* .tweet-media {
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      border: 1px solid var(--light-gray-color);
      border-radius: 16px;
      overflow: hidden;
      max-width: 566px;
    } */

    .info {
      margin-top: 16px;
    }

    .info > * {
      display: inline;
      color: var(--light-gray-color);
    }

    .line {
      height: 0.3px;
      width: 100%;
      background-color: #65778663;
      margin: 16px 0;
    }

    .tweet-actions {
      display: flex;
    }

    .action {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }

    .action > * {
      font-size: 15px;
      color: var(--light-gray-color);
    }

    .count {
      color: #fff;
      margin-right: 5px;
    }

    .count-padding {
      margin-left: 20px;
    }

  `;

  render() {
    return html`
      <div class="tweet-container">

      <div class="avatar">
        <img class="avatar-image" src="/public/img/banner-photo.webp" alt="">
        <div class="user-info">
          <p class="name">Amir Najafi</p>
          <p class="username">@njfamirm</p>
        </div>
      </div>

      <div class="tweet-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta perferendis repudiandae,
        et ducimus sequi iusto, harum, at molestias aut nulla porro necessitatibus dolores laudantium enim nostrum veniam
        tempora blanditiis.</div>

      <!-- <div class="tweet-media"> -->
      <!-- <img src="./avatar.png" alt=""> -->
      <!-- </div> -->

      <div class="info">
        <p class="hour">9:51 PM</p>
        <p> · </p>
        <p class="date">Jan 25, 2022</p>
        <p> · </p>
        <p class="platform">Twitter Web App</p>
      </div>

      <div class="line"></div>

      <div class="tweet-actions">

        <div class="action">
          <p class="count">22</p>
          <p>Retweets</p>
        </div>

        <div class="action">
          <p class="count count-padding">22</p>
          <p>Quote Tweet</p>
        </div>

        <div class="action">
          <p class="count count-padding">22</p>
          <p>Likes</p>
        </div>

      </div>
      </div>
      </div>
    `;
  }
}

customElements.define('tweeph-tweet', Tweet);
