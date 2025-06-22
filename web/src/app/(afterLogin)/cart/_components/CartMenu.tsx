'use client';

import { Plus, Trash } from '@realdangol/jjindangol-ui';
import Image from 'next/image';
import React from 'react';

const CartMenu = () => {
  return (
    <div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2.5 flex-1">
          <span className="typo-element3 text-neutral-700">단골한상</span>
          <div className="flex flex-col gap-1 text-[12px] text-neutral-500">
            <span>제육한상 (14,000원)</span>
            <span>[맵기선택] : 매운맛 [2단계]</span>
            <span>[음료 추가선택] : 콜라 245ml 추가 (1,000원)</span>
          </div>
          <span className="typo-element3 text-neutral-800">15,000원</span>
        </div>
        <div>
          <Image src={'https://picsum.photos/200'} alt="제육한상" width={90} height={90} />
        </div>
      </div>
      <div className="h-[50px] flex justify-end items-center">
        <div className="w-[90px] h-[34px] pl-s pr-xs flex gap-2 items-center border border-neutral-200 rounded-lg text-neutral-800">
          <button type="button">
            <Trash size="20" />
          </button>
          <span className="text-[12px]">1</span>
          <button type="button">
            <Plus size="20" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
