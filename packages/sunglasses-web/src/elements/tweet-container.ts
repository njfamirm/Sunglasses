import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import {css, html} from 'lit';
import {query} from 'lit/decorators.js';

import {delay} from 'core/utils/delay';

import {apiServer, debugMode} from '../config/config.json';
import {SunglassesElement} from '../sunglasses-debt/sunglasses-element';

import type {TemplateResult} from 'lit';

export default class TweetContainer extends SunglassesElement {
  static override styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      cursor: default;
    }

    *:focus-visible {
      outline: none;
    }

    *::selection {
      user-select: none;
    }

    .tweet-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: var(--tweet-theme-1);
      border-radius: 5px;
    }

    .tweet-container:before {
      transform: translate(-25%, -25%) rotate(-180deg);
    }

    .tweet {
      margin: 2em;
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--tweet-bg-color);
      box-shadow: var(--shadow);
      border-radius: 5px;
    }

    .avatar {
      display: flex;
      align-items: center;
    }

    .user-info {
      width: 100%;
      margin-left: 12px;
    }

    .name {
      color: var(--tweet-black-color);
      font-weight: 400;
    }

    .username {
      color: var(--tweet-gray-color);
    }

    .avatar {
      margin-bottom: 28px;
    }

    .avatar > * {
      display: inline;
    }

    .avatar-image {
      width: 48px;
      border-radius: 100px;
    }

    .tweet-text > * {
      font-weight: 400;
      font-size: 25px;
      color: var(--tweet-black-color);
    }

    .tweet-text > p > span {
      color: var(--tweet-dark-gray-color);
    }

    .info {
      margin-top: 28px;
    }

    .info > * {
      display: inline;
      color: var(--tweet-gray-color);
    }

    .line {
      width: 100%;
      height: 0.3px;
      margin: 16px 0;
      background-color: var(--tweet-black-color);
      opacity: 20%;
    }

    .tweet-actions {
      display: flex;
      justify-content: space-around;
    }

    .action {
      display: flex;
      align-items: center;
      margin-right: 20px;
      color: var(--tweet-gray-color);
      font-size: 15px;
    }

    .action-text {
      white-space: nowrap;
    }

    .count {
      margin-right: 5px;
      color: var(--tweet-dark-gray-color);
      font-weight: 300;
    }

    .count-padding {
      margin-left: 20px;
    }
  `;

  enableDate = true;
  enablePlatform = true; // enable if enableDate true
  enableAction = true;

  override render(): TemplateResult {
    return html`
      <div class="tweet-container">
        <div class="tweet">
          <div class="tweet-part avatar">
            <img class="avatar-image" src="${this._tweetInfo.avatar}" alt="" />
            <div class="user-info">
              <p class="name">${this._tweetInfo.name}</p>
              <p class="username">@${this._tweetInfo.username}</p>
            </div>
          </div>

          <div>
            <div class="tweet-part tweet-text">
              <p>${this._tweetInfo.text}</p>
            </div>
          </div>

          <div class="tweet-part">
            <div class="info">
              ${this.enableDate
                ? html`
                    <p class="hour">${this._tweetInfo.hour}</p>
                    <p>·</p>
                    <p class="date">${this._tweetInfo.date}</p>

                    ${this.enablePlatform
                      ? html`
                          <p>·</p>
                          <p class="platform">${this._tweetInfo.platform}</p>
                        `
                      : html``}
                  `
                : html``}
            </div>
            ${this.enableAction
              ? html` <div class="line"></div>

                  <div class="tweet-actions">
                    <div class="action">
                      <p class="count count-padding">${this._tweetInfo.like}</p>
                      <p class="action-text">Likes</p>
                    </div>

                    <div class="action">
                      <p class="count">${this._tweetInfo.retweet}</p>
                      <p class="action-text">Retweets</p>
                    </div>

                    <div class="action">
                      <p class="count count-padding">${this._tweetInfo.quotetweet}</p>
                      <p class="action-text">Quote Tweet</p>
                    </div>
                  </div>`
              : html``}
          </div>
        </div>
      </div>
    `;
  }

  @query('.tweet-container') tweetContainer: HTMLSelectElement | undefined;

  protected override firstUpdated(): void {
    this._signalListener((url: string): void => {
      this._fetchTweet(url);
    }, 'fetchTweet');

    this._signalListener((): void => {
      this._exportTweet();
    }, 'exportTweet');

    this._signalListener((themeNumber) => {
      this._changeTheme(themeNumber);
    }, 'changeTweetTheme');

    this._signalListener((sizeNumber) => {
      this._changeSize(sizeNumber);
    }, 'changeTweetSize');
  }

  fetching = false;
  protected async _fetchTweet(url: string): Promise<void> {
    this._logger.incident('fetchTweet', 'fetch_tweet', `tweet fetch from /v1?link=${url}`);
    this.fetching = true;
    await fetch(`${apiServer}/v1?link=${url}`).then((response) => {
      response
        .json()
        .then((tweetJson) => {
          this.fetching = false;
          this._tweetInfo = tweetJson;
          this.requestUpdate();
        })
        .catch((err) => {
          this.fetching = false;
          this._logger.error('fetch_tweet', 'failed_fetch_tweet', err);
        });
    });
  }

  protected _exportTweet(): void {
    // avoid export before fetching
    if (!this.fetching) {
      delay(500).then(() => {
        // timeout
        if (this.tweetContainer !== undefined) {
          this._logger.incident('export', 'export_tweet', 'exporting tweet');
          if (debugMode === 'debug') {
            domtoimage.toBlob(this.tweetContainer).then((blob) => {
              saveAs(blob, 'sunglasses-tweet.png');
            });
          }
        }
      });
    }
  }

  protected _changeTheme(themeNumber: string): void {
    this.tweetContainer!.setAttribute(
      'style',
      // TODO: better way?
      `${this.tweetContainer?.getAttribute('style') ?? ''}
      background-image: var(--tweet-theme-${themeNumber});`,
    );
  }

  protected _changeSize(sizeNumber: string): void {
    this.tweetContainer!.setAttribute(
      'style',
      // TODO: better way?
      `${this.tweetContainer?.getAttribute('style') ?? ''}
      width: var(--tweet-width-${sizeNumber});
      height: var(--tweet-height-${sizeNumber});`,
    );
  }

  protected _tweetInfo = {
    name: 'Sunglasses',
    username: 'sunglasses',
    avatar: '/static/img/test-avatar.webp',
    text: 'Just copy the tweet URL',
    hour: '10:10 PM',
    date: 'Jan 25, 2022',
    platform: 'Twitter Web App',
    like: 52,
    retweet: 5,
    quotetweet: 15,
  };
}

customElements.define('tweet-container', TweetContainer);

declare global {
  interface HTMLElementTagNameMap {
    'tweet-container': TweetContainer;
  }
}
