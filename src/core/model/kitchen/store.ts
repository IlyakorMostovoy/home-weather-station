import { createStore } from "effector";

import { Kitchen } from "./types";
import { getKitchenLastDataFx, getKitchenFeedsFx } from "./events";

const defaultFeeds: Kitchen = {
  temperature: [],
  humidity: [],
  lastUpdate: "",
};

export const $kitchenFeeds = createStore<Kitchen>(defaultFeeds);

$kitchenFeeds
  .on(getKitchenLastDataFx.done, (_state, { result }) => ({
    ...result,
  }))
  .on(getKitchenFeedsFx.done, (_state, { result }) => ({
    ...result,
  }));
