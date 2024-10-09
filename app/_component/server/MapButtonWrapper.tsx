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
         href="https://map.naver.com/p/directions/-/14144926.3133202,4509290.5302953,%ED%8A%B8%EB%9D%BC%EB%94%94%EB%85%B8%EC%9D%B4,1297636555,PLACE_POI/-/car?c=15.00,0,0,0"
        /*`nmap://route/car?dname=${encNm}&dlat=${lat}&dlng=${lng}` mobile용 link 필요시 사용 */
      >
        <Image src={'/logo/navermap_icon.png'} alt={'네이버지도 로고'} width={26} height={26}/>
        <span className="ms-auto" style={{lineHeight: '28px'}}>네이버</span>
      </a>
      <a className="btn btn-lg btn-dark d-flex align-items-center" style={{width: '32%'}} target="_blank"
         href={
           isMobile ?
             `kakaomap://route?ep=${lat},${lng}&by=CAR`
             :
             `https://map.kakao.com/link/to/${encNm},${lat},${lng}`
           // `https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,514591,1111780&rt2=%ED%8A%B8%EB%9D%BC%EB%94%94%EB%85%B8%EC%9D%B4&rtIds=1726372096&rtTypes=PLACE`
         }
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
