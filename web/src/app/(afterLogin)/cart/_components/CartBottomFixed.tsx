'use client';

import { Button } from '@realdangol/jjindangol-ui';
import React from 'react';

const CartBottomFixed = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[66px] bg-white px-m flex justify-between items-center shadow-[0px_0px_2px_0px_#0000001F] shadow-[0px_0px_8px_0px_#0000001A]">
      <div className="flex flex-col gap-1">
        <span className="typo-body1-bold text-neutral-800">21,500원</span>
        <span className="typo-label text-neutral-500">최소주문금액 14,000원</span>
      </div>
      <Button size="small">배달 주문하기</Button>
    </div>
  );
};

export default CartBottomFixed;
