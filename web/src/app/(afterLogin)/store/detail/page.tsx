import React from 'react';

import {
  EventButton,
  LikeButton,
  MenuList,
  MenuTab,
  StoreDetailTab,
  StoreInfoButton,
  StoreThumbnails,
} from './_components';

const StorePage = () => {
  return (
    <main className="w-full min-h-full">
      <div className="pb-[70px]">
        <StoreThumbnails />
        <div className="relative z-[10] mt-[-20px]  rounded-lg bg-white">
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
  );
};

export default StorePage;
