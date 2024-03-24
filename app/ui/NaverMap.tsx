"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function NaverMap() {
  const initMap = () => {
    // Brewery
    var map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.501817, 127.066025),
      zoom: 15,
      zoomControl: true
    });
    var breweryMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.501817, 127.066025),
      map: map
    })
  };
  //useEffect hook을 사용하여 초기 페이지가 로딩될때 맵을 생성합니다.
  useEffect(() => {
    initMap()
  }, [])

  return (
    <>
      <Script strategy='beforeInteractive' type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=r5hmbpqmrt" />
      <div id="map" style={{"width": "100%", "height": "400px"}} />
    </>
  );
}

