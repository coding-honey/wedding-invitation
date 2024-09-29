"use client";
import ReactPlayer from 'react-player'; // https://www.npmjs.com/package/react-player#props

export default function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://youtu.be/0ZgVQJ2gAjE?si=CpVpCcoZ7492Kdi6"
      width="100%"
    />
  );
}