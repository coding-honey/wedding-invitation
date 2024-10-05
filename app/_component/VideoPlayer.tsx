"use client";

import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  return (
    <ReactPlayer
      className="img-fluid"
      url="/video/wedding-video.mp4"
      height={190}
      controls
    />
  );
}