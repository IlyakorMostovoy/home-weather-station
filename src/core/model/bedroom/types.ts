import { Indicator } from "common/types";

export type Bedroom = {
  temperature: Array<Indicator>;
  humidity: Array<Indicator>;
  pressure: Array<Indicator>;
  lastUpdate: string;
};
