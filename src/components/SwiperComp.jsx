import React from 'react'
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComp = () => {
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide bg-orange-700 ">Slide 1</div>
        <div className="swiper-slide bg-yellow-600">Slide 2</div>
        <div className="swiper-slide bg-red-500">Slide 3</div>
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
}

export default SwiperComp
