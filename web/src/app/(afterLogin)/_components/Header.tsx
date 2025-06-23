'use client';

import { ArrowLeft, ShoppingCart } from '@realdangol/jjindangol-ui';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  isTransparent?: boolean;
  withCartButton?: boolean;
  onBackClick?: () => void;
};

const Header = ({ title, isTransparent = false, withCartButton = false, onBackClick }: Props) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className={clsx(
          'relative max-w-[480px] h-[56px] mx-auto p-4 flex items-center justify-center',
          isTransparent
            ? 'text-white bg-transparent'
            : 'text-neutral-800 bg-white border-b border-neutral-100',
        )}
      >
        <button className="absolute left-[12px]" type="button" onClick={onBackClick}>
          <ArrowLeft />
        </button>
        <h1 className="typo-h2 text-neutral-800">{title}</h1>
        {withCartButton && (
          <Link className="absolute right-[12px]" href={'/cart'}>
            <ShoppingCart />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
