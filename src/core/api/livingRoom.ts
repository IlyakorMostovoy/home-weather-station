import type { LivingRoomResponse } from "./types";
import { normalizeLivingRoomData } from "./utils";

export const getLivingRoomFeeds = (results: number) =>
  fetch(
    `https://api.thingspeak.com/channels/1071939/feeds.json?api_key=HRZUBPMHPHZQUPCY&timezone=Europe/Moscow&results=${results}`
  )
    .then((response) => response.json())
    .then(({ feeds }: LivingRoomResponse) => normalizeLivingRoomData(feeds));
