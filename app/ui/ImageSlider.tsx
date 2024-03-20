"use client";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// https://www.npmjs.com/package/react-slideshow-image

export default function ImageSlider() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <Image
            className="img-fluid w-75"
            src="/album1.png"
            width={430}
            height={242}
            alt="kakaotalk icon"></Image>
        </div>
        <div className="each-fade">
          <Image
            className="img-fluid w-75"
            src="/album2.png"
            width={429}
            height={260}
            alt="kakaotalk icon"></Image>
        </div>
      </Fade>
    </div>
  );
}
