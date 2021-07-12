import { Indicator } from 'common/types';

export type Kitchen = {
  temperature: Array<Indicator>;
  humidity: Array<Indicator>;
  lastUpdate: string;
};
