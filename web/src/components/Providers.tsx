'use client';

import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import React, { Suspense, useEffect } from 'react';

import { initMSW } from '@/mocks';

import { DialogProvider } from './Dialog/DialogProvider';
import DialogRenderer from './Dialog/DialogRenderer';

const Providers = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      initMSW();
    }
  }, []);

  return (
    <SessionProvider>
      <Suspense>
        <DialogProvider>
          {children}
          <DialogRenderer />
        </DialogProvider>
      </Suspense>
    </SessionProvider>
  );
};

export default Providers;
