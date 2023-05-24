// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const Swiping = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2500, }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="swiper-slide bg-orange-700 ">Slide 1</SwiperSlide>
      <SwiperSlide className="swiper-slide bg-sky-700 ">Slide 2</SwiperSlide>
      <SwiperSlide className="swiper-slide bg-teal-700 ">Slide 3</SwiperSlide>
      <SwiperSlide className="swiper-slide bg-slate-700 ">Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Swiping;
