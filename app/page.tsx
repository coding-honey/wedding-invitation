import Image from "next/image";

export default function Home() {
  return (
    <main> {/* className="container-md" */}
      <section className="row">
        <div className="fs-1">정동헌 & 박선영</div>
        <div className="fs-2 mb-0">2025년 1월 11일 토요일 오후 12시 30분</div>
        <div className="fs-2">트라디노이 하우스웨딩홀</div>
      </section>
      <section className="row">
        <Image
          src="/main1.png"
          width={400}
          height={1000}
          alt="main picture 1">
        </Image>
      </section>
      <section className="row fs-5">
        <span>따스한 봄에 만난 사람과</span>
        <span>하얗게 눈이 덮인 계절에 결혼합니다.</span>
        <span>평생 서로에게 단짝이 되어줄</span>
        <span>저희의 첫날에 초대합니다.</span>
        <span>&nbsp;</span>
        <span>귀한 걸음 하시어 축복과 격려 주시면</span>
        <span>더없는 기쁨으로 간직하겠습니다.</span>
      </section>
      <section className="row">
        <Image
          src="/main2.png"
          width={400}
          height={1000}
          alt="main picture 2">
        </Image>
      </section>
      <section className="row">
        <div className="col">정석순 김형순</div>
        <div className="col">장남 정동헌</div>
      </section>
      <section className="row">
        <div className="col">김남희</div>
        <div className="col">장남 정동헌</div>
      </section>
      <section className="row">
      </section>
      <section className="row">
      </section>
    </main>
  );
}
