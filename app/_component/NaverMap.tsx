"use client";

import Script from "next/script";
import {useEffect, useState} from "react";


const encNm = encodeURI("트라디노이");
const lat = 37.501733; // 위도
const lng = 127.065956; // 경도

export default function NaverMap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    (async () => {
      setIsMobile(await fetch('/api/is-mobile').then((res) => res.json()));
    })();
  }, [])

  const initMap = () => {
    // Brewery
    var map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 15,
      zoomControl: true
    });
    var breweryMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: map
    })
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Script type="text/javascript" onLoad={initMap} async={true}
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}/>
        <div id="map" style={{width: "100%", height: "400px", backgroundColor: "#E7E7E7"}}/>
      </div>
      <div className="d-flex justify-content-between">
        <a className="btn btn-lg btn-dark" style={{width: '30%'}}
           href={
             isMobile ?
               `nmap://route/car?dname=${encNm}&dlat=${lat}&dlng=${lng}`
               :
               'https://map.naver.com/p/directions/-/14144926.3133202,4509290.5302953,%ED%8A%B8%EB%9D%BC%EB%94%94%EB%85%B8%EC%9D%B4,1297636555,PLACE_POI/-/car?c=15.00,0,0,0'
           }
        >
          네이버
        </a>
        <a className="btn btn-lg btn-dark" style={{width: '30%'}}
           href={`https://map.kakao.com/link/to/${encNm},${lat},${lng}`}
        >
          카카오
        </a>
        <a className="btn btn-lg btn-dark" style={{width: '30%'}}
           href={
             isMobile ?
               `https://apis.openapi.sk.com/tmap/app/routes?appKey=${process.env.NEXT_PUBLIC_SK_APP_KEY}&name=${encNm}&lat=${lat}&lon=${lng}`
               :
               "https://poi.tmap.co.kr/sharing/positionSharing.do?contents=cGtleT04OTIzODEwMDAmcG9pSWQ9ODkyMzgxMCZuYXZTZXE9MCZ0eXBlPTImcG9pTmFtZT0lRUQlOEElQjglRUIlOUQlQkMlRUIlOTQlOTQlRUIlODUlQjglRUMlOUQlQjQmY2VudGVyWD00NTc0NDUxJmNlbnRlclk9MTM0OTk2NSZ0aW1lPTIwMjQlRUIlODUlODQrMTAlRUMlOUIlOTQrMDglRUMlOUQlQkMrMDElM0E1MSZ0ZWw9MDItNTY3LTk5MTYmYWRkcj0lRUMlODQlOUMlRUMlOUElQjgrJUVBJUIwJTk1JUVCJTgyJUE4JUVBJUI1JUFDKyVFQiU4RiU4NCVFQSVCMyVBMSVFQiVBMSU5Qzk5JUVBJUI4JUI4KzE2&tailParam=%7B%22reqType%22%3A%221100%22%2C%22reqMode%22%3A%221100%22%2C%22extra%22%3A%22112%22%7D"
           }
        >
          티맵
        </a>
      </div>
      <div className="d-flex justify-content-between">
        <a className="btn btn-lg btn-dark w-auto"
           href={`nmap://route/car?dname=${encNm}&dlat=${lat}&dlng=${lng}`}
        >
          네이버(모바일)
        </a>
        <a className="btn btn-lg btn-dark" style={{width: '30%'}}
           href={
             isMobile ?
               `nmap://route/car?dname=${encNm}&dlat=${lat}&dlng=${lng}`
               :
               'https://map.naver.com/p/directions/-/14144926.3133202,4509290.5302953,%ED%8A%B8%EB%9D%BC%EB%94%94%EB%85%B8%EC%9D%B4,1297636555,PLACE_POI/-/car?c=15.00,0,0,0'
           }
        >
          네이버(PC)
        </a>
      </div>
      <div className="d-flex justify-content-between">
        <a className="btn btn-lg btn-dark w-auto"
           href={
             `https://apis.openapi.sk.com/tmap/app/routes?appKey=${process.env.NEXT_PUBLIC_SK_APP_KEY}&name=${encNm}&lat=${lat}&lon=${lng}`
           }
        >
          티맵(모바일)
        </a>
        <a className="btn btn-lg btn-dark w-auto"
           href={
             "https://poi.tmap.co.kr/sharing/positionSharing.do?contents=cGtleT04OTIzODEwMDAmcG9pSWQ9ODkyMzgxMCZuYXZTZXE9MCZ0eXBlPTImcG9pTmFtZT0lRUQlOEElQjglRUIlOUQlQkMlRUIlOTQlOTQlRUIlODUlQjglRUMlOUQlQjQmY2VudGVyWD00NTc0NDUxJmNlbnRlclk9MTM0OTk2NSZ0aW1lPTIwMjQlRUIlODUlODQrMTAlRUMlOUIlOTQrMDglRUMlOUQlQkMrMDElM0E1MSZ0ZWw9MDItNTY3LTk5MTYmYWRkcj0lRUMlODQlOUMlRUMlOUElQjgrJUVBJUIwJTk1JUVCJTgyJUE4JUVBJUI1JUFDKyVFQiU4RiU4NCVFQSVCMyVBMSVFQiVBMSU5Qzk5JUVBJUI4JUI4KzE2&tailParam=%7B%22reqType%22%3A%221100%22%2C%22reqMode%22%3A%221100%22%2C%22extra%22%3A%22112%22%7D"
           }
        >
          티맵(PC)
        </a>
      </div>
    </>
  );
}
