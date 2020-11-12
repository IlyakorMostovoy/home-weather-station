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

export const getLatestTimestamp = (...timestamps: Array<string>): string => {
  if (timestamps.length === 0) return new Date().toString();

  let latestDate: Date = new Date(timestamps[0]);

  timestamps.forEach((timestamp) => {
    const currentDate = new Date(timestamp);

    if (currentDate > latestDate) {
      latestDate = currentDate;
    }
  });

  return latestDate.toString();
};
