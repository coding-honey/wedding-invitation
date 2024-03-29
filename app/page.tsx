import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faPhone} from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "@/app/ui/ImageSlider";
import dynamic from "next/dynamic";
import CalendarWrapper from "@/app/ui/CalendarWrapper";
import NaverMap from "@/app/ui/component/NaverMap";
import AttendanceModal from "@/app/ui/AttendanceModal";

const VideoPlayer = dynamic(() => import("@/app/ui/component/VideoPlayer"), { ssr: false });

export default function Home() {
  return (
    <main className="container">
      <section>
        <div className="fs-1">정동헌 & 박선영</div>
        <div className="fs-2 fw-bold mb-0">2025년 1월 11일 토요일 오후 12시 30분</div>
        <div className="fs-2 fw-bold">트라디노이 하우스웨딩홀</div>
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
          <br/><br/>
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
        <div className="row mb-0">
          <div className="col text-end">
            <span>정석순</span>
            <span className="mx-2"></span>
            <span>김형순</span>
          </div>
          <div className="col text-start">
            <span className="fs-6">장남</span>
            <span className="mx-2"></span>
            <span>정동헌</span>
          </div>
        </div>
        <div className="row">
          <div className="col text-end">
            <span>김남희</span>
          </div>
          <div className="col text-start">
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
              <FontAwesomeIcon icon={faPhone} className="me-3"/>
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faMessage}/>
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신랑 아버지</div>
          <div className="col-3">정석순</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3"/>
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faMessage}/>
            </a>
          </div>
        </div>
        <div className="row mb-1 mb-3 align-items-center">
          <div className="col-5 text-end">신랑 어머니</div>
          <div className="col-3">김형순</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3"/>
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faMessage}/>
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신부</div>
          <div className="col-3">박선영</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3"/>
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faMessage}/>
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신부 어머니</div>
          <div className="col-3">김남희</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} className="me-3"/>
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faMessage}/>
            </a>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="fs-2 fw-bold">Album</div>
        <ImageSlider/>
      </section>
      <section>
        <div className="fs-2 fw-bold">Video</div>
        <div className="d-flex justify-content-center">
          <VideoPlayer/>
        </div>
      </section>
      <section>
        <CalendarWrapper/>
      </section>
      <section>
        <div className="fs-2 fw-bold">오시는 길</div>
        <div>
          <span className="fs-4">트라디노이</span>
          <br/>
          <span className="fs-4">서울 강남구 도곡로99길 16 6층</span>
        </div>
      </section>
      <section>
        <NaverMap />
      </section>
      <section className="text-start mx-5">
        <div className="fs-2 fw-bold">지하철</div>
        <div>
          <div className="fs-4">[2호선] 삼성역 3번출구 도보 14분</div>
          <div className="fs-4">[3호선] 학여울역 1번출구 도보 14분</div>
        </div>
        <div className="fs-2 fw-bold">버스</div>
        <div>
          <div className="fs-4">마을버스 강남 01, 강남 06</div>
          <div className="fs-4">401, 4319, 4419, 500-2, 9507, 9607, 11-3, 917</div>
        </div>
        <div className="fs-2 fw-bold">주차정보</div>
        <div>
          <div className="fs-4">* 대치2동문화센터 공영주차장입구</div>
          <div className="fs-4">주소: 서울 강남구 영동대로65길 24 대치2동주민센터</div>
        </div>
      </section>
      <section>
        <Image
          className="img-fluid"
          src="/main3.png"
          width={439}
          height={645}
          alt="main picture 3">
        </Image>
      </section>
      <section>
        <div className="fs-2 fw-bold">참석 의사 전달</div>
        <div className="fs-4">
          <div>축하의 마음으로 참석해주시는</div>
          <div>모든 분들을 귀하게 모실 수 있도록</div>
          <div>참석 의사를 전달 부탁드립니다.</div>
        </div>
        <button type="button" className="btn btn-lg btn-dark w-75 fs-4">참석 의사 전달하기</button>
      </section>
      <section className="border">
        <AttendanceModal />
      </section>
    </main>
  );
}
