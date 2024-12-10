"use client";

import ReactPlayer from 'react-player';
import {Skeleton} from "@mui/material";

export default function VideoPlayer() {
  return (
    <ReactPlayer
      className="img-fluid"
      url="https://youtu.be/nIUhaVeRY2k"
      width={'100%'}
      height={205}
      controls
      fallback={<Skeleton className="img-fluid mx-auto" variant="rectangular" height={205} animation={'wave'}/>}
    />
  );
}