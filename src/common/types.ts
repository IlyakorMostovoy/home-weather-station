export type Rooms = "livingroom" | "kitchen" | "bathroom" | "outdoors";

export type PhysicalQuantity = "temperature" | "humidity" | "pressure";

export type Indicator = {
  date: string;
  value: number;
};
