import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faPhone} from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "@/app/_component/ImageSlider";
import dynamic from "next/dynamic";
import CalendarWrapper from "@/app/_component/calendar/CalendarWrapper";
import NaverMap from "@/app/_component/NaverMap";
import AttendanceModal from "@/app/_component/AttendanceModal";
import main1Image from "@/public/Image/main1.png";
import main2Image from "@/public/Image/main2.png";
import main3Image from "@/public/Image/main3.png";
import CommentForm from "@/app/_component/comment/CommentForm";
import CommentsWrapper from "@/app/_component/comment/CommentsWrapper";

const VideoPlayer = dynamic(() => import("@/app/_component/VideoPlayer"), {ssr: false});

export default function Home() {
  return (
    <div className="container-fluid main p-4">
      <div className="section">
        <p className="fs-3">정동헌 & 박선영</p>
        <p className="fs-4 fw-bold">
          2025년 1월 11일 토요일 오후 12시 30분<br/>
          트라디노이 하우스웨딩홀
        </p>
      </div>
      <div className="section">
        <Image
          className="img-fluid"
          src={main1Image}
          width={430}
          height={645}
          alt="main picture 1">
        </Image>
      </div>
      <div className="section">
        <p>
          따스한 봄에 만난 사람과<br/>
          하얗게 눈이 덮인 계절에 결혼합니다.<br/>
          평생 서로에게 단짝이 되어줄<br/>
          저희의 첫날에 초대합니다.<br/>
        </p>
        <p>
          귀한 걸음 하시어 축복과 격려 주시면<br/>
          더없는 기쁨으로 간직하겠습니다.
        </p>
      </div>
      <div className="section">
        <Image
          className="img-fluid"
          src={main2Image}
          width={429}
          height={430}
          alt="main picture 2">
        </Image>
      </div>
      <div className="section">
        <div className="row">
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
        {/* TODO 혼주에게 연락하기 Modal 로 변환 */}
        <button type="button" className="btn btn-lg btn-dark w-75">혼주에게 연락하기</button>
      </div>
      <div className="section border">
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
      </div>
      <div className="section">
        <div className="fs-3 fw-bold">Album</div>
        <ImageSlider/>
      </div>
      <div className="section">
        <div className="fs-3 fw-bold">Video</div>
        <div className="d-flex justify-content-center">
          <VideoPlayer/>
        </div>
      </div>
      <div className="section">
        <CalendarWrapper/>
      </div>
      <div className="section">
        <p className="fs-3 fw-bold">오시는 길</p>
        <p>
          트라디노이<br/>
          서울 강남구 도곡로99길 16 6층
        </p>
        <NaverMap/>
      </div>
      <div className="section text-start mx-4">
        <p className="fs-4 fw-bold">지하철</p>
        <p>
          [2호선] 삼성역 3번출구 도보 14분<br/>
          [3호선] 학여울역 1번출구 도보 14분
        </p>
        <p className="fs-4 fw-bold">버스</p>
        <p>
          마을버스 강남 01, 강남 06<br/>
          401, 4319, 4419, 500-2, 9507, 9607, 11-3, 917
        </p>
        <p className="fs-4 fw-bold">주차정보</p>
        <p>
          * 대치2동문화센터 공영주차장입구<br/>
          주소: 서울 강남구 영동대로65길 24 대치2동주민센터
        </p>
      </div>
      <div className="section">
        <Image
          className="img-fluid"
          src={main3Image}
          width={439}
          height={645}
          alt="main picture 3">
        </Image>
      </div>
      <div className="section">
        <p className="fs-3 fw-bold">참석 의사 전달</p>
        <p>
          축하의 마음으로 참석해주시는<br/>
          모든 분들을 귀하게 모실 수 있도록<br/>
          참석 의사를 전달 부탁드립니다.
        </p>
        <button type="button" className="btn btn-lg btn-dark w-75">참석 의사 전달하기</button>
      </div>
      <div className="section border">
        {/* TODO 참석 의사 전달 Modal 로 변환 */}
        <AttendanceModal/>
      </div>
      <div className="section">
        <p className="fs-3 fw-bold">마음 전하실 곳</p>
        <p>
          참석이 어려우신 분들은<br/>
          축하의 마음을 전달해주세요.<br/>
          *장소가 협소한 관계로 화환은 정중히 사양합니다.
        </p>
        {/* TODO 계좌번호 영역 추가 */}
        <button type="button" className="btn btn-lg btn-dark w-75 mb-4">신랑측 계좌번호</button>
        <button type="button" className="btn btn-lg btn-dark w-75">신부측 계좌번호</button>
      </div>
      <div className="section">
        <CommentForm/>
      </div>
      <div className="section">
        <CommentsWrapper/>
      </div>
      <span className="text-body-tertiary">Copyright 2025. Honeyrenda. All rights reserved.</span>
    </div>
  );
}