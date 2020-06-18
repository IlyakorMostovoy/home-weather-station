import { Months } from "common/enums";
import { addZero } from "utils/string";

export const getLastUpdateText = (timestamp: string): string => {
  const date: Date = new Date(timestamp);
  const day: number = date.getDate();
  const month: string = Months[date.getMonth()];
  const year: number = date.getFullYear();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  return `${day} ${month} ${year}, ${addZero(hours)}:${addZero(minutes)}`;
};

export const getLastDate = (
  bedroomDate: string,
  livingRoomDate: string
): string => {
  const bedroomTimestamp = new Date(bedroomDate);
  const livingRoomTimestamp = new Date(livingRoomDate);

  if (bedroomTimestamp > livingRoomTimestamp) {
    return bedroomTimestamp.toString();
  }

  return livingRoomTimestamp.toString();
};
