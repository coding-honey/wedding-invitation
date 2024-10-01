import Image from "next/image";
import MuiDateCalendar from "@/app/_component/calendar/MuiDateCalendar";
import moment from "@/lib/moment";
import manIconImage from "@/public/Image/man-icon.png";
import loveIconImage from "@/public/Image/love-icon.png";
import girlIconImage from "@/public/Image/girl-icon.png";

export default function CalendarWrapper() {
  const weddingMomment = moment("2025-01-11");
  const today = moment();
  const diffDays = weddingMomment.diff(today, "days");

  return (
    <>
      <div className="d-flex justify-content-center">
        <MuiDateCalendar/>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <Image
          src={manIconImage}
          width={24}
          height={24}
          alt="man icon"/>
        <Image
          className="mx-2"
          src={loveIconImage}
          width={24}
          height={24}
          alt="heart icon"/>
        <Image
          src={girlIconImage}
          width={24}
          height={24}
          alt="girl icon"/>
      </div>
      <CalendarDesc days={diffDays}/>
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