"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination} from 'swiper/modules';
import Image from "next/image";
import album1Image from "@/public/Image/album/album-img-1.jpeg";
import album2Image from "@/public/Image/album/album-img-2.jpeg";
import album3Image from "@/public/Image/album/album-img-3.jpeg";
import album4Image from "@/public/Image/album/album-img-4.jpeg";
import album5Image from "@/public/Image/album/album-img-5.jpeg";
import album6Image from "@/public/Image/album/album-img-6.jpeg";
import album7Image from "@/public/Image/album/album-img-7.jpeg";

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
            priority={true}
            alt="Album slide image 1"/>
        </SwiperSlide>
        <SwiperSlide className="mt-auto">
          <Image
            className="img-fluid"
            src={album2Image}
            width={408}
            height={230}
            alt="Album slide image 2"/>
        </SwiperSlide>
        <SwiperSlide className="mt-auto">
          <Image
            className="img-fluid"
            src={album3Image}
            width={408}
            height={230}
            alt="Album slide image 3"/>
        </SwiperSlide>
        <SwiperSlide className="mt-auto">
          <Image
            className="img-fluid"
            src={album4Image}
            width={408}
            height={230}
            alt="Album slide image 4"/>
        </SwiperSlide>
        <SwiperSlide className="mt-auto">
          <Image
            className="img-fluid"
            src={album5Image}
            width={408}
            height={230}
            alt="Album slide image 5"/>
        </SwiperSlide>
        <SwiperSlide className="mt-auto">
          <Image
            className="img-fluid"
            src={album6Image}
            width={408}
            height={230}
            alt="Album slide image 6"/>
        </SwiperSlide>
        <SwiperSlide className="mt-auto">
          <Image
            className="img-fluid"
            src={album7Image}
            width={408}
            height={230}
            alt="Album slide image 7"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
