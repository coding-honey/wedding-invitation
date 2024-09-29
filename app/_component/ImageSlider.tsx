"use client";
import Image from "next/image"; // https://www.npmjs.com/package/react-slideshow-image
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import album1Image from "@/public/Image/album1.png";
import album2Image from "@/public/Image/album2.png";


export default function ImageSlider() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <Image
            className="img-fluid w-75"
            src={album1Image}
            width={430}
            height={242}
            alt="Album slide image 1" />
        </div>
        <div className="each-fade">
          <Image
            className="img-fluid w-75"
            src={album2Image}
            width={429}
            height={260}
            alt="Album slide image 1" />
        </div>
      </Fade>
    </div>
  );
}
