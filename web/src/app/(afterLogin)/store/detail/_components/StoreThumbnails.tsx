'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const StoreThumbnails = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      autoplay
      loop
      pagination={{
        el: '.store-thumbnail-pagination',
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          return `<span>${`${current} / ${total}`}</span>`;
        },
      }}
    >
      <SwiperSlide>
        <div className="relative h-[260px]">
          <Image
            src={'https://picsum.photos/500'}
            alt="qwe"
            width={480}
            height={260}
            className="object-cover h-full"
            quality={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[260px]">
          <Image
            src={'https://picsum.photos/400'}
            alt="qwe"
            width={480}
            height={260}
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[260px]">
          <Image
            src={'https://picsum.photos/400'}
            alt="qwe"
            width={480}
            height={260}
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <div className="store-thumbnail-pagination absolute z-10 !bottom-12 !right-4 !left-auto !w-fit inline-block typo-label text-white bg-neutral-500" />
    </Swiper>
  );
};

export default StoreThumbnails;
