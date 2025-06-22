'use client';

import { ArrowLeft, ShoppingCart } from '@realdangol/jjindangol-ui';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  isTransparent: boolean;
};

const StoreDetailHeader = ({ isTransparent }: Props) => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className={clsx(
          'max-w-[480px] h-[56px] mx-auto p-4 flex justify-between',
          isTransparent ? 'text-white bg-transparent' : 'text-neutral-800 bg-white',
        )}
      >
        <button type="button" onClick={router.back}>
          <ArrowLeft />
        </button>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default StoreDetailHeader;
