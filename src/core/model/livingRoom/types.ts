import { Indicator } from "common/types";

export type LivingRoom = {
  temperature: Array<Indicator>;
  humidity: Array<Indicator>;
  lastUpdate: string;
};
