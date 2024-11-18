import Image from "next/image";
import manIconImage from "@/public/Image/man-icon.png";
import loveIconImage from "@/public/Image/love-icon.png";
import girlIconImage from "@/public/Image/girl-icon.png";
import MuiDateCalendar from "@/app/_component/calendar/MuiDateCalendar";
import CalendarDesc from "@/app/_component/calendar/CalendarDesc";

export default function CalendarWrapper() {
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
      <CalendarDesc/>
    </>
  );
}