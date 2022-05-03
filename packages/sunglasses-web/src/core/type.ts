export type signalType = 'fetchTweet' | 'exportTweet' | 'changeTweetTheme' | 'changeTweetSize';

export type signalValue = {
  name: signalType;
  description?: string;
};
