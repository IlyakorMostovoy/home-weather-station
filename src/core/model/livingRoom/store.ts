import { createStore } from "effector";

import { LivingRoom } from "./types";
import { getLivingRoomFeedsFx } from "./events";

const defaultLastData: LivingRoom = {
  temperature: [],
  humidity: [],
  lastUpdate: "",
};

export const $livingRoomLastData = createStore<LivingRoom>(defaultLastData);

$livingRoomLastData.on(getLivingRoomFeedsFx.done, (_state, { result }) => ({
  ...result,
}));
