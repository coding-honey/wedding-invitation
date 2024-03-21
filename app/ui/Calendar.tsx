import { Calendar as ReactCalendar } from "react-calendar"; // https://www.npmjs.com/package/react-calendar
import Image from "next/image";

export function DefaultCalendar() {
  const weddingDate = new Date(2025, 0, 11);

  return (
    <ReactCalendar
      className="border-0"
      value={weddingDate}
      activeStartDate={weddingDate}
      locale="ko-KR"
      showNeighboringMonth={false}
    />
  )
}

export default function Calendar() {
  const weddingDate = new Date(2025, 0, 11);

  return (
    <ReactCalendar
      className="border-0"
      value={weddingDate}
      activeStartDate={weddingDate}
      locale="ko-KR"
      showNeighboringMonth={false}
      tileContent={tileContent}
    />
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
        <br/>
        <Image
          src="/wedding.png"
          width={24}
          height={24}
          alt="wedding icon"/>
      </>
    );
  } else {
    return null;
  }
};

const tileClassName = async (tileArgs?: TileArgs) => {
  "use server";

  return (tileArgs?.date?.getMonth() === 0 && tileArgs?.date?.getDate() === 11) ? "weddingDay" : null;
}
