import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      style={{ width: "100vw", height: "50vh" }}
    >
      <SwiperSlide>
        <img
          src="./pizza1.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./pizza2.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./pizza3.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
