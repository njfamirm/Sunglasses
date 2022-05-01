export type signalType = 'fetchTweet' | 'exportTweet';

export type signalValue = {
  name: signalType;
  description?: string;
};
