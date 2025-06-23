'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import {
  EventButton,
  LikeButton,
  MenuList,
  MenuTab,
  StoreDetailBottomFixed,
  StoreDetailHeader,
  StoreDetailTab,
  StoreInfoButton,
  StoreThumbnails,
} from './_components';

const StorePage = () => {
  const router = useRouter();
  const { ref: thumbnailRef, inView } = useInView({
    rootMargin: '-40px 0px 0px 0px',
  });

  return (
    <>
      <StoreDetailHeader isTransparent={inView} onBackClick={router.back} />
      <main className="w-full min-h-full">
        <div className="pb-[200px]">
          <div ref={thumbnailRef}>
            <StoreThumbnails />
          </div>
          <div className="relative z-[10] mt-[-20px]  rounded-t-lg bg-white">
            <div className="py-2.5 px-4 flex justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <span className="py-1 px-2 rounded-2xl text-[10px] text-white bg-success-600">
                  매 주문 4,000원 할인
                </span>
                <h1 className="typo-h1 text-neutral-800">단골밥상</h1>
                <StoreInfoButton />
              </div>
              <LikeButton />
            </div>
            <StoreDetailTab />
            <EventButton />
            <div className="py-4">
              <MenuTab />
              <MenuList />
            </div>
          </div>
        </div>
      </main>
      <StoreDetailBottomFixed />
    </>
  );
};

export default StorePage;
