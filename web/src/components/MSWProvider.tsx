'use client';

import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { initMSW } from '@/mocks';

const MSWProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      initMSW();
    }
  }, []);

  return children;
};

export default MSWProvider;
