import { normalizeLivingroomData } from "utils/api";

import type { LivingroomResponse } from "./types";

export const getLivingroomFeeds = (results: number) =>
  fetch(
    `https://api.thingspeak.com/channels/1071939/feeds.json?api_key=HRZUBPMHPHZQUPCY&timezone=Europe/Moscow&results=${results}`
  )
    .then((response) => response.json())
    .then(({ feeds }: LivingroomResponse) => normalizeLivingroomData(feeds));
