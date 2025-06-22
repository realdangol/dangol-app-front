'use client';

import { Plus } from '@realdangol/jjindangol-ui';
import Link from 'next/link';
import React from 'react';

import CartMenu from './CartMenu';

const CartMenuList = () => {
  return (
    <div className="border border-neutral-200 rounded-2xl">
      <div className="p-4">
        <span className="typo-body2-bold text-neutral-800">피자스쿨 역삼1동점</span>
        <div className="mt-4 flex flex-col gap-4">
          <CartMenu />
          <CartMenu />
          <CartMenu />
        </div>
      </div>
      <Link
        href={'/store/detail'}
        className="w-full h-[56px] flex items-center justify-center gap-1 border-t border-neutral-100 text-neutral-800 typo-label"
      >
        <Plus size="20" />
        메뉴추가
      </Link>
    </div>
  );
};

export default CartMenuList;
