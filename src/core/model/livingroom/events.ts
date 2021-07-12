import { Effect, createEffect } from 'effector';

import { getLivingroomFeeds } from 'core/api/livingroom';

import { Livingroom } from './types';

export const getLivingroomLastDataFx: Effect<
  void,
  Livingroom,
  Error
> = createEffect({
  async handler() {
    const data = await getLivingroomFeeds(2);

    return data;
  },
});

export const getLivingroomFeedsFx: Effect<
  void,
  Livingroom,
  Error
> = createEffect({
  async handler() {
    const data = await getLivingroomFeeds(288);

    return data;
  },
});
