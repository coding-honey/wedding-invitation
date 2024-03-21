import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSms } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "@/app/ui/ImageSlider";
import "react-calendar/dist/Calendar.css";
import Calendar, {DefaultCalendar, TileArgs} from "@/app/ui/Calendar";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("@/app/ui/Calendar"), { ssr: false });

export default function Home() {
  return (
    <main className="container">
      <section>
        <div className="fs-1 mb-5">정동헌 & 박선영</div>
        <div className="fs-2">2025년 1월 11일 토요일 오후 12시 30분</div>
        <div className="fs-2">트라디노이 하우스웨딩홀</div>
      </section>
      <section>
        <Image
          className="img-fluid"
          src="/main1.png"
          width={430}
          height={645}
          alt="main picture 1">
        </Image>
      </section>
      <section>
        <div className="row fs-4">
          <span>따스한 봄에 만난 사람과</span>
          <span>하얗게 눈이 덮인 계절에 결혼합니다.</span>
          <span>평생 서로에게 단짝이 되어줄</span>
          <span>저희의 첫날에 초대합니다.</span>
          <span>&nbsp;</span>
          <span>귀한 걸음 하시어 축복과 격려 주시면</span>
          <span>더없는 기쁨으로 간직하겠습니다.</span>
        </div>
      </section>
      <section>
        <Image
          className="img-fluid"
          src="/main2.png"
          width={429}
          height={430}
          alt="main picture 2">
        </Image>
      </section>
      <section className="fs-4 mx-4">
        <div className="row">
          <div className="col col-md col-sm text-end">
            <span>정석순</span>
            <span className="mx-2"></span>
            <span>김형순</span>
          </div>
          <div className="col col-md col-sm text-start">
            <span className="fs-6">장남</span>
            <span className="mx-2"></span>
            <span>정동헌</span>
          </div>
        </div>
        <div className="row">
          <div className="col col-md col-sm text-end">
            <span>김남희</span>
          </div>
          <div className="col col-md col-sm text-start">
            <span className="fs-6">장녀</span>
            <span className="mx-2"></span>
            <span>박선영</span>
          </div>
        </div>
      </section>
      <section className="row justify-content-center">
        <button type="button" className="btn btn-lg btn-dark w-75 fs-4">혼주에게 연락하기</button>
      </section>
      <section className="border">
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신랑</div>
          <div className="col-3">정동헌</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3" />
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faSms} />
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신랑 아버지</div>
          <div className="col-3">정석순</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3" />
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faSms} />
            </a>
          </div>
        </div>
        <div className="row mb-1 mb-3 align-items-center">
          <div className="col-5 text-end">신랑 어머지</div>
          <div className="col-3">김형순</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3" />
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faSms} />
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신부</div>
          <div className="col-3">박선영</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3" />
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faSms} />
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신부 어머니</div>
          <div className="col-3">김남희</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3" />
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faSms} />
            </a>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="fs-2">Album</div>
        <ImageSlider/>
      </section>
      <section className="pt-5">
        <div className="fs-2">Video</div>
        {/* Videa */}
      </section>
      <section className="pt-5 d-flex justify-content-center">
        <Suspense fallback={<DefaultCalendar/>}>
          <Calendar/>
        </Suspense>
      </section>
      <section>
      </section>
    </main>
  );
}
