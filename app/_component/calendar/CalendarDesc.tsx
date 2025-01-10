"use client";

import {useEffect, useState} from "react";
import moment from "@/lib/moment";

export default function CalendarDesc() {
  const [dDay, setDDay] = useState<number>(0);
  useEffect(() => {
    const weddingMomment = moment("2025-01-11");
    const today = moment().startOf("day");
    setDDay(weddingMomment.diff(today, "days"));
  }, []);

  return (
    <div className={"fs-5"}>
      <span className={"fs-4"}>정동헌, 박선영 </span>
      님의 결혼식이
      {(dDay > 0) ?
        <> <span style={{color: "blue"}}>{dDay} </span>
          일 남았어요.</> :
        (dDay === 0) ?
          <> <span className={"fs-4"}>오늘 </span>이에요! 🎉</> :
          <> <span style={{color: "red"}}>{dDay} </span>
            일 지났어요.</>
      }
    </div>
  );
}