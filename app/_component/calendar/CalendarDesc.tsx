"use client";

import {useEffect, useState} from "react";
import moment from "@/lib/moment";

export default function CalendarDesc() {
  const [dDay, setDDay] = useState<number>(0);
  const [today, setToday] = useState<string>("YYYY-MM-DD HH:mm:ss");
  useEffect(() => {
    const weddingMomment = moment("2025-01-11");
    const today = moment();
    setDDay(weddingMomment.diff(today, "days"));
    setToday(today.format("YYYY-MM-DD HH:mm:ss"));
  }, []);

  return (
    <div className={"fs-5"}>
      <div>{today}</div>
      <span className={"fs-4"}>정동헌, 박선영 </span>
      님의 결혼식이
      {(dDay && dDay > 0) ?
        <> <span style={{color: "blue"}}>{dDay} </span>
          일 남았어요.</> :
        (dDay === 0) ?
          <> 오늘이에요! 🎉</> :
          <> <span style={{color: "red"}}>{dDay && -dDay} </span>
            일 지났어요.</>
      }
    </div>
  );
}