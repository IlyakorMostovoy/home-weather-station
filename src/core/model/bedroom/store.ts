import { createStore } from "effector";

import { Bedroom } from "./types";
import { getBedroomLastDataFx } from "./events";

const defaultLastData: Bedroom = {
  temperature: [],
  humidity: [],
  pressure: [],
  lastUpdate: "",
};

export const $bedroomLastData = createStore<Bedroom>(defaultLastData);

$bedroomLastData.on(getBedroomLastDataFx.done, (_state, { result }) => ({
  ...result,
}));
