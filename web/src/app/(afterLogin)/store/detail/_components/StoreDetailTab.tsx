'use client';

import { Tabs } from '@realdangol/jjindangol-ui';
import React, { useState } from 'react';

const StoreDetailTab = () => {
  const [activeTab, setActiveTab] = useState('delivery');

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div>
      <Tabs
        activeTab={activeTab}
        fullWidth
        items={[
          {
            label: '배달',
            value: 'delivery',
          },
          {
            label: '픽업',
            value: 'pickUp',
          },
        ]}
        onTabClick={handleTabClick}
      />
      <div className="mt-4 px-4">
        <div className="p-4 border border-neutral-200 rounded-lg flex flex-col gap-4">
          {activeTab === 'delivery' ? (
            <>
              <div className="flex gap-7">
                <span className="inline-block w-[50px] typo-label text-neutral-800">최소주문</span>
                <span className="typo-label text-neutral-800">9,300원</span>
              </div>
              <div className="flex gap-7">
                <span className="inline-block w-[50px] typo-label text-neutral-800">배달시간</span>
                <span className="typo-label text-neutral-800">15~30분</span>
              </div>
              <div className="flex gap-7">
                <span className="inline-block w-[50px] typo-label text-neutral-800">배달팁</span>
                <div className="flex flex-col gap-2">
                  <span className="typo-label text-neutral-800">3,000원</span>
                  <span className="text-[10px] text-neutral-500">25,000원 이상 주문 시 무료</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-7">
                <span className="inline-block w-[50px] typo-label text-neutral-800">최소주문</span>
                <span className="typo-label text-neutral-800">없음</span>
              </div>
              <div className="flex gap-7">
                <span className="inline-block w-[50px] typo-label text-neutral-800">픽업시간</span>
                <span className="typo-label text-neutral-800">15~30분</span>
              </div>
              <div className="flex gap-7">
                <span className="inline-block w-[50px] typo-label text-neutral-800">배달팁</span>
                <div className="flex flex-col gap-2">
                  <span className="typo-label text-neutral-800">3,000원</span>
                  <span className="text-[10px] text-neutral-500">25,000원 이상 주문 시 무료</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreDetailTab;
