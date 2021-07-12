export type Rooms = 'livingroom' | 'kitchen' | 'bathroom' | 'outdoors';

export type PhysicalQuantity = 'temperature' | 'humidity' | 'pressure';

export type Indicator = {
  date: string;
  value: number;
};

export enum Months {
  april,
  august,
  december,
  february,
  january,
  july,
  june,
  march,
  may,
  november,
  october,
  september,
}
