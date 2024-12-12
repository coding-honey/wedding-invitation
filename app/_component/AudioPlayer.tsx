"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useSnackbar} from "@/app/_provider/SnackbarProvider";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const {handleOpenSnackbar} = useSnackbar();

  useEffect(() => {
    setTimeout(() => {
      handleOpenSnackbar('우측 상단 아이콘을 클릭시 음악이 재생됩니다.', 'info', 'top')
    }, 3000);
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div className="d-flex justify-content-end">
      <audio ref={audioRef} src="/audio/no_song_without_you.mp3" preload="auto"/>

      <div style={{cursor: "pointer"}} onClick={togglePlay}>
        {isPlaying ? <Image src={'/logo/volume.png'} alt={'배경음악 재생'} width={26} height={26}/> :
          <Image src={'/logo/volume-mute.png'} alt={'배경음악 일시정지'} width={26} height={26}/>}
      </div>
    </div>
  );
}
