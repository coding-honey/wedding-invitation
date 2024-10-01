import moment from "moment-timezone";

const defaultTimezone = "Asia/Seoul";

moment.tz.setDefault(defaultTimezone);

export default moment;