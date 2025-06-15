'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const StoreThumbnails = () => {
  return (
    <Swiper
      className="h-[260px]"
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        el: '.custom-pagination',
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          return `<span>${current}/${total}</span>`;
        },
      }}
    >
      <SwiperSlide>
        <div className="relative h-[260px]">
          <Image src={'https://picsum.photos/400'} alt="qwe" fill className="object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[260px]">
          <Image src={'https://picsum.photos/400'} alt="qwe" fill className="object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[260px]">
          <Image src={'https://picsum.photos/400'} alt="qwe" fill className="object-cover" />
        </div>
      </SwiperSlide>
      <div className="custom-pagination absolute z-10 bottom-12 right-4 inline-block text-sm text-gray-500 bg-neutral-500" />
    </Swiper>
  );
};

export default StoreThumbnails;
