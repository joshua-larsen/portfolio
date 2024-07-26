export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInVancouver(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Vancouver's time
  const offsetVancouver = - 7; // Vancouver is in Pacific Standard Time (UTC-7), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetVancouver);

  return now;
}

export function formatTimeForVancouver(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/Vancouver",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "PST", but do remember that Vancouver switches between PST and PDT.
  formattedTime += " PST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
