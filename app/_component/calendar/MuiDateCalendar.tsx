"use client";

import {Suspense} from "react";
import {DateCalendar, DayCalendarSkeleton, LocalizationProvider} from "@mui/x-date-pickers";
import moment, {weddingDay} from "@/lib/moment";
// import 'moment/locale/ko'; // moment의 한글 로케일 import
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";

export default function MuiDateCalendar() {
  // moment.tz.setDefault(defaultTimezone);
  // moment.locale(defaultLocale);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={moment.locale()}>
      <Suspense fallback={<DayCalendarSkeleton/>}>
        {moment.locale()}
        <DateCalendar
          className={"calendar"}
          views={['day']}
          defaultValue={moment(weddingDay)}
          readOnly
          slotProps={{
            calendarHeader: {format: "YYYY년 M월"},
            day: {
              lang: 'ko'
            },
          }}
          sx={{
            ".MuiPickersCalendarHeader-root": {pointerEvents: 'none'},
            ".MuiPickersArrowSwitcher-root": {display: "none"},
            ".MuiPickersCalendarHeader-label": {fontSize: '1.25rem'},
            ".MuiTypography-caption, .MuiPickersDay-root": {fontSize: '1rem', width: '38px', height: '38px'},
            ".MuiDayCalendar-header": {
              "> .MuiTypography-root:nth-child(6)": {
                color: 'rgba(0, 0, 255, 0.6)'
              },
              "> .MuiTypography-root:nth-child(7)": {
                color: 'rgba(255, 0, 0, 0.6)'
              },
            },
            ".MuiDayCalendar-weekContainer": {
              "> .MuiPickersDay-root:nth-child(6)": {
                color: 'rgba(0, 0, 255, 0.87)'
              },
              "> .MuiPickersDay-root:nth-child(7)": {
                color: 'rgba(255, 0, 0, 0.87)'
              },
              ".Mui-selected": {
                color: 'rgba(255, 255, 255, 0.87) !important'
              },
            },
          }}
        />
      </Suspense>
    </LocalizationProvider>
  );
}