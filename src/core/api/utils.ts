import { Bedroom } from "core/model/bedroom/types";
import { LivingRoom } from "core/model/livingRoom/types";

import { BedroomFeedResponse, LivingRoomFeedResponse } from "./types";

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

export const normalizeLivingRoomData = (
  feeds: Array<LivingRoomFeedResponse>
): LivingRoom => ({
  temperature: feeds.map((feed: LivingRoomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field1),
  })),
  humidity: feeds.map((feed: LivingRoomFeedResponse) => ({
    date: feed.created_at,
    value: Number(feed.field2),
  })),
  lastUpdate: feeds[feeds.length - 1].created_at,
});
