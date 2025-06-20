'use client';

import { ArrowRight } from '@realdangol/jjindangol-ui';
import React from 'react';

import colors from '@/constants/colors';

const StoreInfoButton = () => {
  return (
    <button className="flex items-center text-[10px] leading-4 text-neutral-800">
      가게정보 원산지 <ArrowRight size="16" color={colors.neutral600} />
    </button>
  );
};

export default StoreInfoButton;
