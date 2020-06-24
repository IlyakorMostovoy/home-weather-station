import { createStore } from "effector";

import { Bedroom } from "./types";
import { getBedroomLastDataFx, getBedroomFeedsFx } from "./events";

const defaultFeeds: Bedroom = {
  temperature: [],
  humidity: [],
  pressure: [],
  lastUpdate: "",
};

export const $bedroomFeeds = createStore<Bedroom>(defaultFeeds);

$bedroomFeeds
  .on(getBedroomLastDataFx.done, (_state, { result }) => ({
    ...result,
  }))
  .on(getBedroomFeedsFx.done, (_state, { result }) => ({
    ...result,
  }));
