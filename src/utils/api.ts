import { Bedroom } from "core/model/bedroom/types";
import { Livingroom } from "core/model/livingroom/types";

import { BedroomFeedResponse, LivingroomFeedResponse } from "../core/api/types";

export const normalizeBedroomData = (
  feeds: Array<BedroomFeedResponse>
): Bedroom => ({
  temperature: feeds.map((feed: BedroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field1),
  })),
  humidity: feeds.map((feed: BedroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field2),
  })),
  pressure: feeds.map((feed: BedroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field3),
  })),
  lastUpdate: feeds[feeds.length - 1].created_at,
});

export const normalizeLivingroomData = (
  feeds: Array<LivingroomFeedResponse>
): Livingroom => ({
  temperature: feeds.map((feed: LivingroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field1),
  })),
  humidity: feeds.map((feed: LivingroomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field2),
  })),
  lastUpdate: feeds[feeds.length - 1].created_at,
});
