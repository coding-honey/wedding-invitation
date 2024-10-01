"use client";
import {DateCalendar, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "@/lib/moment";
import {DayCalendarSkeleton} from '@mui/x-date-pickers/DayCalendarSkeleton';
import React, {Suspense} from "react";

export default function MuiDateCalendar() {
  const weddingMomment = moment("2025-01-11");
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Suspense fallback={<DayCalendarSkeleton/>}>
        <DateCalendar
          className={"calendar"}
          views={['day']}
          defaultValue={weddingMomment}
          readOnly/>
      </Suspense>
    </LocalizationProvider>
  );
}