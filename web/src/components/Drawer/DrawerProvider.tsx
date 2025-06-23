'use client';

import { debounce } from 'lodash-es';
import type { ReactElement } from 'react';
import React, { createContext, useCallback, useEffect, useState } from 'react';

import Drawers from './Drawers';

type DrawerState = {
  drawerStack: ReactElement[];
  push: (component: ReactElement) => void;
  pop: () => void;
};

export const DrawerContext = createContext<DrawerState | null>(null);

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [drawerStack, setDrawerStack] = useState<DrawerState['drawerStack']>([]);

  const push = useCallback(
    debounce(
      (component: ReactElement) => {
        setDrawerStack((prev) => [...prev, component]);
      },
      500,
      { leading: true, trailing: false },
    ),
    [],
  );

  const pop = () => {
    setDrawerStack((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    if (drawerStack.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerStack]);

  return (
    <DrawerContext.Provider value={{ drawerStack, push, pop }}>
      {children}
      <Drawers />
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
