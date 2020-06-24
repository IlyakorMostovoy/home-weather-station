import { normalizeBedroomData } from "utils/api";

import type { BedroomResponse } from "./types";

export const getBedroomFeeds = (results: number) =>
  fetch(
    `https://api.thingspeak.com/channels/469723/feeds.json?api_key=VLWOOUVP1DT2CMAT&timezone=Europe/Moscow&results=${results}`
  )
    .then((response) => response.json())
    .then(({ feeds }: BedroomResponse) => normalizeBedroomData(feeds));
