'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components';
import OnboardingImage1 from '@/public/images/onboarding/onboarding1.png';

const slides = [
  {
    title: '기억나시나요?',
    description: '전단지에 있는 번호로 배달주문 하고\n쿠폰 모아 냉장고에 붙이던\n그 때 그 시절',
    image: OnboardingImage1,
  },
  {
    title: '만족하시나요?',
    description: '편했지만\n편리의 대가는 너무 컸습니다',
    image: OnboardingImage1,
  },
  {
    title: '시작하기',
    description: '지금 바로 시작해보세요!',
    image: OnboardingImage1,
  },
  {
    title: '시작하기2',
    description: '지금 바로 시작해보세요!3',
    image: OnboardingImage1,
  },
];

const OnboardingPage = () => {
  return (
    <div className="relative max-w-[480px] h-dvh mx-auto">
      <Swiper
        className="w-[210px] h-full"
        modules={[Pagination]}
        pagination={{
          el: '#containerForBullets',
          type: 'bullets',
          bulletClass: 'swiper-custom-bullet',
          bulletActiveClass: 'swiper-custom-bullet-active',
        }}
      >
        <div id="containerForBullets"></div>
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="h-full flex flex-col justify-center items-center p-5">
              <h1 className="text-h text-neutral-800">{slide.title}</h1>
              <p className="text-body3-regular text-center mt-5 mb-8 text-neutral-500 whitespace-pre">
                {slide.description}
              </p>
              <Image src={slide.image} alt={slide.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-10 z-1 w-full flex justify-center">
        <Link className="w-[85vw]" href={'/login'}>
          <Button className="w-full">로그인</Button>
        </Link>
      </div>
    </div>
  );
};

export default OnboardingPage;
