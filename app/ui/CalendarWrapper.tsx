import { Calendar as ReactCalendar } from "react-calendar"; // https://www.npmjs.com/package/react-calendar
import Image from "next/image";

export default function CalendarWrapper() {
  const weddingDate = new Date(2025, 0, 11);
  const today = new Date();
  const diffTime = (weddingDate?.getTime() - today?.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const today1 = new Date(2025, 0, 11);
  const diffTime1 = (weddingDate?.getTime() - today1?.getTime());
  const diffDays1 = Math.ceil(diffTime1 / (1000 * 60 * 60 * 24));
  const today2 = new Date(2026, 0, 11);
  const diffTime2 = (weddingDate?.getTime() - today2?.getTime());
  const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24));

  const calendarDesc = CalendarDesc(diffDays);
  const calendarDesc1 = CalendarDesc(diffDays1);
  const calendarDesc2 = CalendarDesc(diffDays2);

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <ReactCalendar
          className="border-0"
          value={weddingDate}
          activeStartDate={weddingDate}
          locale="ko-KR"
          showNeighboringMonth={false}
          tileContent={tileContent}
        />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <Image
          src="/man-icon.png"
          width={24}
          height={24}
          alt="man icon" />
        <Image
          className="mx-2"
          src="/heart-icon.png"
          width={24}
          height={24}
          alt="heart icon" />
        <Image
          src="/girl-icon.png"
          width={24}
          height={24}
          alt="girl icon" />
      </div>
      <div className="fs-4">
        {calendarDesc}
      </div>
      <div className="fs-4">
        {calendarDesc1}
      </div>
      <div className="fs-4">
        {calendarDesc2}
      </div>
    </>
  );
}

export type View = 'century' | 'decade' | 'year' | 'month';
export type TileArgs = {
  activeStartDate: Date;
  date: Date;
  view: View;
};
const tileContent = async (tileArgs?: TileArgs) => {
  "use server";

  if (tileArgs?.date?.getMonth() === 0 && tileArgs?.date?.getDate() === 11) {
    // return <p className="m-0"><FontAwesomeIcon icon={faChampagneGlasses} /></p>;
    return (
      <>
        {tileArgs?.date?.getDate()}
        <br/>
        <Image
          src="/wedding-icon.png"
          width={24}
          height={24}
          alt="wedding icon"/>
      </>
    );
  } else {
    return <>{tileArgs?.date?.getDate()}</>;
  }
};

const CalendarDesc = (days?: number) => {
  return (
    <>정동헌, 박선영 님의 결혼식이
      {(days && days > 0) ?
        <> <span style={{color: "blue"}}>{days} </span>
          일 남았어요.</> :
        (days === 0) ?
          <> 오늘이에요!</> :
          <> <span style={{color: "red"}}>{days && -days} </span>
            일 지났어요.</>
      }
    </>
  );
}