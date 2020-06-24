import { Effect, createEffect } from "effector";

import { getBedroomFeeds } from "core/api/bedroom";

import { Bedroom } from "./types";

export const getBedroomLastDataFx: Effect<void, Bedroom, Error> = createEffect({
  async handler() {
    const data = await getBedroomFeeds(2);

    return data;
  },
});

export const getBedroomFeedsFx: Effect<void, Bedroom, Error> = createEffect({
  async handler() {
    const data = await getBedroomFeeds(288);

    return data;
  },
});
