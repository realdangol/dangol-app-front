'use client';

import React from 'react';

const CartAddress = () => {
  return (
    <div className="py-8 px-4 flex justify-between items-center gap-2">
      <div className="flex gap-2 items-center flex-1">
        <span className="typo-element3 text-neutral-500">집 배송</span>
        <p className="flex-1 typo-element3 text-neutral-800">사울 강남구 역삼로3 333 빌라 333</p>
      </div>
      <button className="typo-element3 text-neutral-500" type="button">
        수정
      </button>
    </div>
  );
};

export default CartAddress;
