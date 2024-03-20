import { Calendar as ReactCalendar } from "react-calendar";
// https://www.npmjs.com/package/react-calendar

const weddingDate = new Date(2025, 0, 11);

// export type View = 'century' | 'decade' | 'year' | 'month';
// async function tileContent( activeStartDate?: Date, date?: Date, view?: View ) {
//   console.log(activeStartDate)
//   console.log(date)
//   return true ? <p>123</p> : null;
// }
export default function Calendar() {
  // const titleCon = await tileContent();
  return (
    <ReactCalendar
      className="w-75 border-0"
      value={weddingDate}
      locale="ko-KR"
      navigationAriaLabel="test"
      showNeighboringMonth={false}
      // tileContent={titleCon}
    />
  );
}
