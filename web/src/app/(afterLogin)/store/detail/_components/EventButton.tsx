'use client';

import { ArrowRight, Notification } from '@realdangol/jjindangol-ui';
import React from 'react';

const EventButton = () => {
  return (
    <div className="my-4 px-4" role="button">
      <div className="py-2.5 px-4 flex justify-between border border-brand-200 rounded-lg">
        <div className="flex items-center gap-3">
          <span className="inline-block w-[28px] h-[28px] flex items-center justify-center bg-brand-200 text-brand-700 rounded-full">
            <Notification size="16" />
          </span>
          <strong className="typo-element3">사장님이 이벤트 중!</strong>
        </div>
        <div className="flex items-center gap-1 text-neutral-600">
          <span className="typo-element3">전체 쿠폰</span>
          <ArrowRight size="16" />
        </div>
      </div>
    </div>
  );
};

export default EventButton;
