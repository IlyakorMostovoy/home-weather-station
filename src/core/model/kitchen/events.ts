import { Effect, createEffect } from "effector";

import { getKitchenFeeds } from "core/api/kitchen";

import { Kitchen } from "./types";

export const getKitchenLastDataFx: Effect<void, Kitchen, Error> = createEffect({
  async handler() {
    const data = await getKitchenFeeds(2);

    return data;
  },
});

export const getKitchenFeedsFx: Effect<void, Kitchen, Error> = createEffect({
  async handler() {
    const data = await getKitchenFeeds(288);

    return data;
  },
});
