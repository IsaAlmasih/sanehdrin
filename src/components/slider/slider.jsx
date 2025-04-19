// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import imag1 from "../../assets/0002.jpg"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image src={imag1} width={400} height={200} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={imag1} width={400} height={300} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={imag1} width={400} height={300} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={imag1} width={400} height={300} alt="logo" />
      </SwiperSlide>
    </Swiper>
  );
};
