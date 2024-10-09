"use server";

import Image from "next/image";
import {headers} from "next/headers";
import {lat, lng} from "@/app/_component/NaverMap";

const encNm = encodeURI("트라디노이");

export default async function MapButtonWrapper() {
  const userAgent = headers().get("user-agent") || '';
  const isMobile = /Mobi|Android/i.test(userAgent || '');

  return (
    <div className="d-flex justify-content-between bg-body-secondary">
      <a className="btn btn-lg btn-dark d-flex align-items-center" style={{width: '32%'}} target="_blank"
         href="https://naver.me/GfMsKKWO"
      >
        <Image src={'/logo/navermap_icon.png'} alt={'네이버지도 로고'} width={26} height={26}/>
        <span className="ms-auto" style={{lineHeight: '28px'}}>네이버</span>
      </a>
      <a className="btn btn-lg btn-dark d-flex align-items-center" style={{width: '32%'}} target="_blank"
         href="https://kko.to/IiRVNJc66M"
      >
        <Image src={'/logo/kakaomap_icon.png'} alt={'카카오맵 로고'} width={26} height={26}/>
        <span className="ms-auto" style={{lineHeight: '28px'}}>카카오</span>
      </a>
      <a className="btn btn-lg btn-dark d-flex align-items-center" style={{width: '32%'}} target="_blank"
         href={
           isMobile ?
             `https://apis.openapi.sk.com/tmap/app/routes?appKey=${process.env.NEXT_PUBLIC_SK_APP_KEY}&name=${encNm}&lat=${lat}&lon=${lng}`
             :
             "https://poi.tmap.co.kr/sharing/positionSharing.do?contents=cGtleT04OTIzODEwMDAmcG9pSWQ9ODkyMzgxMCZuYXZTZXE9MCZ0eXBlPTImcG9pTmFtZT0lRUQlOEElQjglRUIlOUQlQkMlRUIlOTQlOTQlRUIlODUlQjglRUMlOUQlQjQmY2VudGVyWD00NTc0NDUxJmNlbnRlclk9MTM0OTk2NSZ0aW1lPTIwMjQlRUIlODUlODQrMTAlRUMlOUIlOTQrMDglRUMlOUQlQkMrMDElM0E1MSZ0ZWw9MDItNTY3LTk5MTYmYWRkcj0lRUMlODQlOUMlRUMlOUElQjgrJUVBJUIwJTk1JUVCJTgyJUE4JUVBJUI1JUFDKyVFQiU4RiU4NCVFQSVCMyVBMSVFQiVBMSU5Qzk5JUVBJUI4JUI4KzE2&tailParam=%7B%22reqType%22%3A%221100%22%2C%22reqMode%22%3A%221100%22%2C%22extra%22%3A%22112%22%7D"
         }
      >
        <Image src={'/logo/tmap_icon.png'} alt={'티맵 로고'} width={26} height={26}/>
        <span className="mx-auto" style={{lineHeight: '28px'}}>티 맵</span>
      </a>
    </div>
  );
}
