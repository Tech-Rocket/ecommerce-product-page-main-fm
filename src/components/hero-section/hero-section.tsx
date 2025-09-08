import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-expect-error Swiper has no type declarations for CSS imports
import "swiper/css";
// @ts-expect-error Swiper has no type declarations for CSS imports
import "swiper/css/navigation";

export default function HeroSection() {
  return (
    <div>
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black !important;

            width: 40px !important;
            height: 40px !important;
          background-color: black !important;
          border-radius: 100% !important;
        }


        /* shrink the arrow inside */
        .swiper-button-next::after,
        .swiper-button-prev::after {
            font-size: 18px !important;
            font-weight: bold !important;
            color: white !important; 
        }
      `}</style>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[18rem]"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="w-full h-full">
          <img src="/images/image-product-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="/images/image-product-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="/images/image-product-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="/images/image-product-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
