'use client';

import { Button, NotificationFilled } from '@realdangol/jjindangol-ui';
import Image from 'next/image';
import React from 'react';

import colors from '@/constants/colors';

const Flyer = () => {
  return (
    <div className="p-4 flex flex-col gap-4 border border-neutral-100 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <Image
            src={'https://picsum.photos/200'}
            alt="매장명"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="typo-body1-medium text-neutral-800">매장명</span>
        </div>
        <button type="button">
          <NotificationFilled color={colors.brand700} />
        </button>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-2.5 flex-1">
          <span className="typo-label text-neutral-600">단골서비스 군만두 6개</span>
          <span className="typo-label text-neutral-600">단골서비스 군만두 6개</span>
          <span className="typo-label text-neutral-600">단골서비스 군만두 6개</span>
          <span className="typo-label text-neutral-600">단골서비스 군만두 6개</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="typo-label text-neutral-600 !font-light">평균 재주문 N.N회</span>
        </div>
      </div>
      <Button variant="outlinePrimary" size="medium">
        늘 먹던대로 주세요
      </Button>
    </div>
  );
};

export default Flyer;
