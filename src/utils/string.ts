import { PhysicalQuantity } from "common/types";

export const addZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const getUnitMeasure = (physicalQuantity: PhysicalQuantity): string => {
  switch (physicalQuantity) {
    case "temperature":
      return "C°";

    case "humidity":
      return "%";

    case "pressure":
      return "hPa";

    default:
      return "";
  }
};
