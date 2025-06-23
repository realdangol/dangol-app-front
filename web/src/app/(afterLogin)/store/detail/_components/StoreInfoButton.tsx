'use client';

import { ArrowRight } from '@realdangol/jjindangol-ui';
import React from 'react';

import colors from '@/constants/colors';
import useDrawer from '@/hooks/useDrawer';

import StoreInfo from './StoreInfo';

const StoreInfoButton = () => {
  const drawer = useDrawer();

  return (
    <button
      className="flex items-center text-[10px] leading-4 text-neutral-800"
      onClick={() => drawer.push(<StoreInfo />)}
    >
      가게정보 원산지 <ArrowRight size="16" color={colors.neutral600} />
    </button>
  );
};

export default StoreInfoButton;
