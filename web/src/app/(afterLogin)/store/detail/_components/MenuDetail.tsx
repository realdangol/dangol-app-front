'use client';

import { Badge, RadioGroup } from '@realdangol/jjindangol-ui';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import useDrawer from '@/hooks/useDrawer';

import StoreDetailHeader from './StoreDetailHeader';
import StoreThumbnails from './StoreThumbnails';

const MenuDetail = () => {
  const drawer = useDrawer();
  const { ref: thumbnailRef, inView } = useInView({
    rootMargin: '-40px 0px 0px 0px',
  });

  return (
    <div className="max-h-dvh overflow-auto scrollbar-hide">
      <StoreDetailHeader isTransparent={inView} onBackClick={drawer.pop} />
      <main className="w-full min-h-full">
        <div className="pb-[200px]">
          <div ref={thumbnailRef}>
            <StoreThumbnails />
          </div>
          <div className="relative z-[10] mt-[-20px] rounded-t-lg bg-white">
            <div className="h-[67px] py-2.5 px-4 flex justify-between items-center">
              <h1 className="typo-h2 text-neutral-800">[고민없이] 제육한상</h1>
              <Badge size="small">단골 Pick!</Badge>
            </div>
            <p className="px-4 typo-body3-regular text-neutral-600 whitespace-pre-line">
              {
                '순한맛/보통맛/덜 매운맛/매운맛\n넓적다리살의 뼈를 이나러ㅑ더리나ㅓㄹ니ㅏ러ㅣㄴ러나\n부드러원 다러니ㅏㅇ러ㅣ나런'
              }
            </p>
            <div className="px-4 mt-8 flex flex-col gap-2.5">
              <div>
                <div className="py-2.5">
                  <h2 className="typo-element1 text-neutral-800">가격</h2>
                  <p className="typo-element4 text-neutral-700">최대 1개 선택</p>
                </div>
                <RadioGroup options={[{ label: '제육한상', value: '제육한상' }]} />
              </div>
              <div>
                <div className="py-2.5">
                  <h2 className="typo-element1 text-neutral-800">맵기 선택</h2>
                </div>
                <RadioGroup options={[{ label: '제육한상', value: '제육한상' }]} />
              </div>
              <div>
                <div className="py-2.5">
                  <h2 className="typo-element1 text-neutral-800">사이드</h2>
                  <p className="typo-element4 text-neutral-700">최대 5개</p>
                </div>
                <RadioGroup options={[{ label: '제육한상', value: '제육한상' }]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuDetail;
