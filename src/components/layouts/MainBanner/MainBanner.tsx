"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import Image from "next/image";

const MainBanner = () => {
  return (
    <section id="mainBanner">
      <div className="w-full  h-[150px] overflow-hidden">
        <Swiper
          effect={"fade"}
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
          }}
          loop
          speed={1000}
          centeredSlides={true}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <Image
              src={"/banners/banner1.png"}
              width={600}
              height={150}
              alt="main banner 1"
              className="w-full h-auto object-contain"
              priority
              quality={80}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/banners/banner2.jpg"}
              width={600}
              height={150}
              alt="main banner 2"
              className="w-full h-auto object-contain"
              priority
              quality={80}
              layout="responsive"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default React.memo(MainBanner);
