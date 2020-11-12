import { Indicator } from "common/types";

export type Livingroom = {
  temperature: Array<Indicator>;
  humidity: Array<Indicator>;
  pressure: Array<Indicator>;
  lastUpdate: string;
};
