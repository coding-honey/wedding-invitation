"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination} from 'swiper/modules';
import Image from "next/image";
import album1Image from "@/public/Image/album1.png";
import album2Image from "@/public/Image/album2.png";

export default function ImageSlider() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        // navigation={true}
        autoplay={{delay: 4000}}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="mt-auto">
          <Image
            className="img-fluid"
            src={album1Image}
            width={408}
            height={230}
            alt="Album slide image 1"/>
          {/*<img src="/image/album1.png" alt="Album Image 1"/>*/}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="img-fluid"
            src={album2Image}
            width={408}
            height={230}
            alt="Album slide image 2"/>
          {/*<img src="/image/album2.png" alt="Album Image 2"/>*/}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
