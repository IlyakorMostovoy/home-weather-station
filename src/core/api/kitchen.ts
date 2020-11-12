import { normalizeKitchenData } from "utils/api";

import type { KitchenResponse } from "./types";

export const getKitchenFeeds = (results: number) =>
  fetch(
    `https://api.thingspeak.com/channels/1071939/feeds.json?api_key=HRZUBPMHPHZQUPCY&timezone=Europe/Moscow&results=${results}`
  )
    .then((response) => response.json())
    .then(({ feeds }: KitchenResponse) => normalizeKitchenData(feeds));
