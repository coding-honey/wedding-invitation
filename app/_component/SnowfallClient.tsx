"use client";

import dynamic from "next/dynamic";

const Snowfall = dynamic(() => import("react-snowfall"), {ssr: false});

export default function SnowfallClient() {
  return <Snowfall
    style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
    }}
    wind={[-0.5, 0.5]}
  />
}

