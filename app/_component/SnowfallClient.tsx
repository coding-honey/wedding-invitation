"use client";

import dynamic from "next/dynamic";

const Snowfall = dynamic(() => import("react-snowfall"), {ssr: false});

export default function SnowfallClient() {
  return <Snowfall wind={[-0.5, 0.5]}/>
}

