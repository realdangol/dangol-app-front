'use client';

import React from 'react';

const CartTotalPayment = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="typo-element2 text-neutral-800">결제금액을 확인해주세요</h2>
      <div className="p-4 border border-neutral-200 rounded-2xl flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="typo-body3-medium text-neutral-800">총 금액</span>
            <span className="typo-body2-medium text-neutral-800">25,500원</span>
          </div>
          <div className="flex justify-between">
            <span className="typo-body3-medium text-neutral-600">찐단골 할인</span>
            <span className="typo-body3-medium text-brand-700">-4,000원</span>
          </div>
          <div className="flex justify-between">
            <span className="typo-body3-medium text-neutral-600">배달팁</span>
            <span className="typo-body3-medium text-neutral-600">무료</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="typo-element2 text-neutral-800">결제예정금액</span>
          <span className="typo-element2 text-neutral-800">21,500원</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPayment;
