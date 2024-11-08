"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import carousel1 from "../../assets/b1.png";
import carousel2 from "../../assets/b2.png";
import carousel3 from "../../assets/b3.png";
import carousel4 from "../../assets/b4.png";
import bgCarousel from "../../assets/fd-black.jpg";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgCarousel.src})` }}
      className="bg-cover bg-fixed bg-center bg-no-repeat py-20 max-w-[1024px] mx-auto"
    >
      <Swiper
        spaceBetween={50}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        effect={"coverflow"}
      >
        <SwiperSlide className="">
          <Image
            src={carousel1}
            width={300}
            height={300}
            alt="image1"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={carousel2}
            width={300}
            height={300}
            alt="image2"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={carousel3}
            width={300}
            height={300}
            alt="image3"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={carousel4}
            width={300}
            height={300}
            alt="image4"
            className="mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
