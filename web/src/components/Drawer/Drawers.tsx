'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import useDrawer from '@/hooks/useDrawer';

const TRANSITION_DURATION = 0.2;

const Drawers = () => {
  const { drawerStack, clear } = useDrawer();
  const pathname = usePathname();
  const [duration, setDuration] = useState(TRANSITION_DURATION);

  useEffect(() => {
    if (duration === 0) {
      clear();
      setDuration(TRANSITION_DURATION);
    }
  }, [duration]);

  useEffect(() => {
    return () => {
      setDuration(0);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {drawerStack.map((drawerStack, index) => (
        <motion.div
          key={index}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            width: '100%',
            height: '100dvh',
            background: '#fff',
          }}
        >
          <div className="max-w-[480px] mx-auto">{drawerStack}</div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default Drawers;
