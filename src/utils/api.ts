import { Livingroom } from 'core/model/livingroom/types';
import { Kitchen } from 'core/model/kitchen/types';

import { LivingroomFeedResponse, KitchenFeedResponse } from 'core/api/types';

export const normalizeLivingroomData = (
  feeds: Array<LivingroomFeedResponse>,
): Livingroom => ({
  temperature: feeds.map((feed: LivingroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field1),
  })),
  humidity: feeds.map((feed: LivingroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field2),
  })),
  pressure: feeds.map((feed: LivingroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field3),
  })),
  lastUpdate: feeds[feeds.length - 1].created_at,
});

export const normalizeKitchenData = (
  feeds: Array<KitchenFeedResponse>,
): Kitchen => ({
  temperature: feeds.map((feed: KitchenFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field1),
  })),
  humidity: feeds.map((feed: KitchenFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field2),
  })),
  lastUpdate: feeds[feeds.length - 1].created_at,
});
