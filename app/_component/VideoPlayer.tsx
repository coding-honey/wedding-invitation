"use client";

import ReactPlayer from 'react-player';
import {Skeleton} from "@mui/material";

export default function VideoPlayer() {
  return (
    <ReactPlayer
      className="img-fluid"
      url="/video/wedding-video.mp4"
      width={'100%'}
      height={'100%'}
      controls
      fallback={<Skeleton className="img-fluid mx-auto" variant="rectangular" height={190} animation={'wave'}/>}
    />
  );
}