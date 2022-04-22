import {css, html, LitElement} from 'lit';

import type {TemplateResult} from 'lit';

export default class Tweet extends LitElement {
  static override styles = css`
    * {
      transition: color 1s ease;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *::selection {
      user-select: none;
    }

    .tweet-container {
      box-shadow: var(--shadow);
      padding: 20px 20px;
      background-color: var(--white-color);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 600px;
      border-radius: 5px;
    }

    /* .tweet-container > * {
        color: var(--tweet-light-color);
      } */

    .avatar {
      display: flex;
      align-items: center;
    }

    .user-info {
      width: 100%;
      margin-left: 12px;
    }

    .name {
      color: var(--black-color);
      font-weight: 700;
    }

    .username {
      color: var(--gray-color);
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

    .tweet-text p {
      color: var(--black-color);
    }

    .tweet-text > p > span {
      color: var(--dark-gray-color);
    }

    .info {
      margin-top: 16px;
    }

    .info > * {
      display: inline;
      color: var(--gray-color);
    }

    .line {
      height: 0.3px;
      width: 100%;
      background-color: var(--black-color);
      opacity: 20%;
      margin: 16px 0;
    }

    .tweet-actions {
      display: flex;
      justify-content: space-around;
    }

    .action {
      display: flex;
      align-items: center;
      margin-right: 20px;
      font-size: 15px;
      color: var(--gray-color);
    }

    .action-text {
      white-space: nowrap;
    }

    .count {
      color: var(--dark-gray-color);
      margin-right: 5px;
      font-weight: 400;
    }

    .count-padding {
      margin-left: 20px;
    }
  `;

  override render(): TemplateResult {
    return html`
      <div class="tweet-container">

      <div class="avatar">
        <img class="avatar-image" src="${tweetJson.avatar}" alt="">
        <div class="user-info">
          <p class="name">${tweetJson.name}</p>
          <p class="username">@${tweetJson.username}</p>
        </div>
      </div>

      <div class="tweet-text">
        <p>
        ${tweetJson.text}
        </p>
      </div>

      <!-- <div class="tweet-media"> -->
      <!-- </div> -->

      <div class="info">
        <p class="hour">${tweetJson.hour}</p>
        <p> · </p>
        <p class="date">${tweetJson.date}</p>
        <p> · </p>
        <p class="platform">${tweetJson.platform}</p>
      </div>

      <div class="line"></div>

      <div class="tweet-actions">

        <div class="action">
          <p class="count count-padding">${tweetJson.like}</p>
          <p class="action-text">Likes</p>
        </div>

        <div class="action">
          <p class="count">${tweetJson.retweet}</p>
          <p class="action-text">Retweets</p>
        </div>

        <div class="action">
          <p class="count count-padding">${tweetJson.quotetweet}</p>
          <p class="action-text">Quote Tweet</p>
        </div>

      </div>
      </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.fetchTweet();
  }

  async fetchTweet(): Promise<void> {
    await fetch('/api').then((response) => {
      response.json().then((t) => {
        tweetJson = t;
        this.requestUpdate();
      });
    });
  }
}

customElements.define('sunglasses-tweet', Tweet);

declare global {
  interface HTMLElementTagNameMap {
    'sunglasses-tweet': Tweet;
  }
}

let tweetJson = {
  name: 'Sunglasses',
  username: 'sunglasses',
  avatar: '/public/img/test-avatar.jpg',
  text: 'Just copy the tweet URL',
  hour: '10:10 PM',
  date: 'Jan 25, 2022',
  platform: 'Twitter Web App',
  like: '52',
  retweet: '5',
  quotetweet: '15',
};
