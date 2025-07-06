'use client';

import { ArrowRight } from '@realdangol/jjindangol-ui';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const OrderItem = () => {
  const router = useRouter();

  const delivered = true;

  return (
    <div className="p-4 flex flex-col gap-4 border border-neutral-100 rounded-lg">
      <span className="typo-label text-neutral-500">5월 5일 (월)</span>
      <div className="flex gap-5">
        <div>
          <Image src={'https://picsum.photos/200'} alt="제육한상" width={90} height={90} />
        </div>
        <div className="flex justify-between items-center flex-1">
          <div className="flex flex-col gap-1.5 flex-1">
            <span className="typo-body1-bold text-neutral-800">매장명</span>
            <span className="typo-body2-medium">뿌링클외 3건</span>
            <span className="typo-body3-regular">25,500원</span>
          </div>
          <button>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div>
        <button
          className={clsx(
            'w-full h-10 py-2.5 border rounded-lg typo-body1-bold',
            delivered
              ? 'border-neutral-300 text-neutral-300'
              : 'border-brand-700 bg-brand-100 text-brand-700',
          )}
          disabled={delivered}
          role="link"
          onClick={() => router.push('/orders/detail')}
        >
          {delivered ? '배달 완료' : '조리중'}
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
