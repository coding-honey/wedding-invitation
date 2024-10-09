import moment from "moment-timezone";

const defaultTimezone = "Asia/Seoul";

moment.tz.setDefault(defaultTimezone);
moment.updateLocale("ko", {
  week: {
    dow: 1
  }
});

export default moment;
export const weddingDay = "2025-01-11";
