'use client';

import { ArrowLeft, Tabs } from '@realdangol/jjindangol-ui';
import { useRouter } from 'next/navigation';
import React from 'react';

const CartHeader = () => {
  const { back } = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white">
      <div className="max-w-[480px] mx-auto">
        <div className="relative h-[56px] flex items-center justify-center">
          <button className="absolute left-[12px]" onClick={back}>
            <ArrowLeft />
          </button>
          <h1 className="typo-h2 text-neutral-800">장바구니</h1>
        </div>
        <Tabs
          activeTab="delivery"
          items={[
            {
              label: '배달',
              value: 'delivery',
            },
            {
              label: '픽업',
              value: 'pickUp',
            },
            {
              label: '매장식사',
              value: 'eatIn',
            },
          ]}
          fullWidth
        />
      </div>
    </header>
  );
};

export default CartHeader;
