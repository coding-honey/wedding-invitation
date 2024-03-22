"use client";
import {DateCalendar, LocalizationProvider, PickersDay, PickersDayProps} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment, {Moment} from "moment";
import 'moment/locale/ko';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import React, {Suspense} from "react";
import Image from "next/image";
// import { DayCalendarSkeleton } from '@mui/x-date-pickers';

export default function MuiDateCalendar() {
  const weddingMomment = moment("2025-01-11");
  const [highlightedDays] = React.useState([11]);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Suspense fallback={<DayCalendarSkeleton />}>
        <DateCalendar
          className={"calendar"}
          defaultValue={weddingMomment}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            } as any,
          }}
          readOnly />
      </Suspense>
    </LocalizationProvider>
  );
}

function ServerDay(props: PickersDayProps<Moment> & { highlightedDays?: number[] }) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <>
      {isSelected
        ? (
          <button className={"MuiButtonBase-root MuiPickersDay-root Mui-selected MuiPickersDay-dayWithMargin css-1u23akw-MuiButtonBase-root-MuiPickersDay-root"}
            tabIndex={-1} type="button" role="gridcell" data-timestamp="1736002800000" aria-colindex={1} aria-selected="false">
            <span
              className="align-self-center MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root">
              <Image
                src="/wedding-icon.png"
                width={24}
                height={24}
                alt="wedding icon"/>
            </span>
          </button>
        )
        : <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      }
    </>
  );
}