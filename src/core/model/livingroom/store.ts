import { createStore } from "effector";

import { Livingroom } from "./types";
import { getLivingroomLastDataFx, getLivingroomFeedsFx } from "./events";

const defaultFeeds: Livingroom = {
  temperature: [],
  humidity: [],
  lastUpdate: "",
};

export const $livingroomFeeds = createStore<Livingroom>(defaultFeeds);

$livingroomFeeds
  .on(getLivingroomLastDataFx.done, (_state, { result }) => ({
    ...result,
  }))
  .on(getLivingroomFeedsFx.done, (_state, { result }) => ({
    ...result,
  }));
