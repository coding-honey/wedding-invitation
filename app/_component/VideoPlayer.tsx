"use client";

import ReactPlayer from 'react-player';
import {Skeleton} from "@mui/material";

export default function VideoPlayer() {
  return (
    <ReactPlayer
      className="img-fluid"
      url="/video/wedding-video.mp4"
      height={190}
      controls
      fallback={<Skeleton className="img-fluid" variant="rectangular" height={190} animation={'wave'}/>}
    />
  );
}