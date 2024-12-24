import Image from "next/image";
import ImageSlider from "@/app/_component/ImageSlider";
import dynamic from "next/dynamic";
import CalendarWrapper from "@/app/_component/calendar/CalendarWrapper";
import NaverMap from "@/app/_component/NaverMap";
import AttendanceWrapper from "@/app/_component/AttendanceWrapper";
import mainImg1 from "@/public/Image/main-img-1.jpeg";
import mainImg2 from "@/public/Image/main-img-2.jpeg";
import mainImg3 from "@/public/Image/main-img-3.png";
import CommentWrapper from "@/app/_component/comment/CommentWrapper";
import ContactWrapper from "@/app/_component/contact/ContactWrapper";
import BankAccordionWrapper from "@/app/_component/accordion/BankAccordionWrapper";
import SnackbarGlobal from "@/app/_component/snackbar/SnackbarGlobal";
import MapButtonWrapper from "@/app/_component/server/MapButtonWrapper";
import SnowfallClient from "@/app/_component/SnowfallClient";
import AudioPlayer from "@/app/_component/AudioPlayer";
import CopyButton from "@/app/_component/CopyButton";

const DynamicVideoPlayer = dynamic(() => import("@/app/_component/VideoPlayer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container-fluid mw">
      <SnowfallClient/>
      <AudioPlayer/>
      <div className="section">
        <p className="fs-3">정동헌 & 박선영</p>
        <p className="fs-4 fw-bold">
          2025년 1월 11일 토요일 오후 12시 30분<br/>
          트라디노이 6층 하우스웨딩홀
        </p>
      </div>
      <div className="section">
        <Image
          className="img-fluid"
          src={mainImg1}
          width={430}
          height={645}
          alt="main image 1">
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
          src={mainImg2}
          width={429}
          height={430}
          alt="main image 2">
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
            <span className="text-body-tertiary fs-6">장남</span>
            <span className="mx-2"></span>
            <span>정동헌</span>
          </div>
        </div>
        <div className="row">
          <div className="col text-end">
            <span>김남희</span>
          </div>
          <div className="col text-start">
            <span className="text-body-tertiary fs-6">장녀</span>
            <span className="mx-2"></span>
            <span>박선영</span>
          </div>
        </div>
        <ContactWrapper/>
      </div>
      <hr/>
      <div className="section">
        <p className="fs-3 fw-bold">참석 의사 전달</p>
        <p>
          축하의 마음으로 참석해주시는<br/>
          모든 분들을 귀하게 모실 수 있도록<br/>
          참석 의사를 전달 부탁드립니다.
        </p>
        <AttendanceWrapper/>
      </div>
      <hr/>
      <div className="section">
        <p className="fs-3 fw-bold">Album</p>
        <div className="d-flex justify-content-center">
          <ImageSlider/>
        </div>
      </div>
      <div className="section">
        <p className="fs-3 fw-bold">Video</p>
        <div className="d-flex justify-content-center">
          <DynamicVideoPlayer/>
        </div>
      </div>
      <hr/>
      <div className="section">
        <CalendarWrapper/>
      </div>
      <hr/>
      <div className="section">
        <p className="fs-3 fw-bold">오시는 길</p>
        <p className="mb-0">
          트라디노이 6층 하우스웨딩홀<br/>
        </p>
        <p className="d-flex justify-content-center">
          주소: 서울 강남구 도곡로99길 16 <CopyButton text={'서울 강남구 도곡로99길 16'} iconSize={'lg'} style={{marginLeft: '0.5rem'}}/>
        </p>
        <NaverMap/>
        <MapButtonWrapper/>
      </div>
      <div className="section text-start card">
        <div className="card-body">
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
          <p className="mb-0">
            * 대치2동문화센터 공영주차장입구<br/>
          </p>
          <p className="d-flex justify-content-start">
            주소: 서울 강남구 영동대로65길 24 <CopyButton text={'서울 강남구 영동대로65길 24'} iconSize={'lg'}
                                              style={{marginLeft: '0.5rem'}}/>
          </p>
        </div>
      </div>
      <div className="section">
        <Image
          className="img-fluid"
          src={mainImg3}
          width={439}
          height={645}
          alt="main image 3">
        </Image>
      </div>
      <div className="section">
        <p className="fs-3 fw-bold">마음 전하실 곳</p>
        <p>
          참석이 어려우신 분들은<br/>
          축하의 마음을 전달해주세요.<br/>
          <span className="fs-6">* 장소가 협소한 관계로 화환은 정중히 사양합니다.</span>
        </p>
        <BankAccordionWrapper/>
      </div>
      <hr/>
      <CommentWrapper/>
      <span className="text-body-tertiary fs-6">Copyright 2025. Honeyrenda. All rights reserved.</span>
      <SnackbarGlobal/>
    </div>
  );
}