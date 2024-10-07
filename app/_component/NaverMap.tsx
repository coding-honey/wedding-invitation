"use client";

import Script from "next/script";

export default function NaverMap() {
  const initMap = () => {
    // Brewery
    var map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.501804, 127.066049),
      zoom: 15,
      zoomControl: true
    });
    var breweryMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.501804, 127.066049),
      map: map
    })
  };

  return (
    <div className="d-flex justify-content-center">
      <Script type="text/javascript" onLoad={initMap} async={true}
              src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}/>
      <div id="map" style={{width: "100%", height: "400px", backgroundColor: "#E7E7E7"}}/>
    </div>
  )
    ;
}

