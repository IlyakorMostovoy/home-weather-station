import { normalizeLivingroomData } from 'utils/api';

import type { LivingroomResponse } from './types';

export const getLivingroomFeeds = (results: number) => fetch(
  `https://api.thingspeak.com/channels/469723/feeds.json?api_key=VLWOOUVP1DT2CMAT&timezone=Europe/Moscow&results=${results}`,
)
  .then((response) => response.json())
  .then(({ feeds }: LivingroomResponse) => normalizeLivingroomData(feeds));
