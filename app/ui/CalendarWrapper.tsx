import Image from "next/image";
import MuiDateCalendar from "@/app/ui/component/MuiDateCalendar";
import moment from "moment";
import 'moment/locale/ko';

export default function CalendarWrapper() {
  const weddingMomment = moment("2025-01-11");
  const today = moment();
  const afterDay = moment("2026-01-01");
  const diffDays = weddingMomment.diff(today, "days");
  const diffEquals = weddingMomment.diff(weddingMomment, "days")
  const diffAfter = weddingMomment.diff(afterDay, "days")

  return (
    <>
      <div className="d-flex justify-content-center">
        <MuiDateCalendar />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <Image
          src="/man-icon.png"
          width={24}
          height={24}
          alt="man icon" />
        <Image
          className="mx-2"
          src="/love-icon.png"
          width={24}
          height={24}
          alt="heart icon" />
        <Image
          src="/girl-icon.png"
          width={24}
          height={24}
          alt="girl icon" />
      </div>
      <CalendarDesc days={diffDays} />
      <CalendarDesc days={diffEquals} />
      <CalendarDesc days={diffAfter} />
    </>
  );
}

const CalendarDesc = ({days}: { days?: number }) => {
  return (
    <div className={"fs-5"}>
      <span className={"fs-4"}>정동헌, 박선영 </span>
      님의 결혼식이
      {(days && days > 0) ?
        <> <span style={{color: "blue"}}>{days} </span>
          일 남았어요.</> :
        (days === 0) ?
          <> 오늘이에요! 🎉</> :
          <> <span style={{color: "red"}}>{days && -days} </span>
            일 지났어요.</>
      }
    </div>
  );
}