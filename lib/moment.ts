import moment from "moment-timezone";
import 'moment/locale/ko'; // moment의 한글 로케일 import

export const defaultTimezone = "Asia/Seoul";
export const defaultLocale = "ko";

moment.tz.setDefault(defaultTimezone);
moment.updateLocale(defaultLocale, {
  week: {
    dow: 1
  }
});

export default moment;
export const weddingDay = "2025-01-11";
