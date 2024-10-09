"use client";

import {Suspense} from "react";
import {DateCalendar, DayCalendarSkeleton, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment, {weddingDay} from "@/lib/moment";

export default function MuiDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={moment.locale()}>
      <Suspense fallback={<DayCalendarSkeleton/>}>
        <DateCalendar
          className={"calendar"}
          views={['day']}
          defaultValue={moment(weddingDay)}
          readOnly
          slotProps={{
            calendarHeader: {format: "YYYY년 M월"},
          }}
          sx={{
            ".MuiPickersCalendarHeader-root": {pointerEvents: 'none'},
            ".MuiPickersArrowSwitcher-root": {display: "none"},
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