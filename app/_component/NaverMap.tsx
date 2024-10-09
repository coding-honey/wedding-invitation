"use client";

import Script from "next/script";

export const lat = 37.501733; // 위도
export const lng = 127.065956; // 경도

export default function NaverMap() {
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
    <div className="d-flex justify-content-center">
      <Script type="text/javascript" onLoad={initMap} async={true}
              src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}/>
      <div id="map" style={{width: "100%", height: "400px", backgroundColor: "#E7E7E7"}}/>
    </div>
  );
}
