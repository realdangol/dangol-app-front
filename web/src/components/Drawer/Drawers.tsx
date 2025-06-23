'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import useDrawer from '@/hooks/useDrawer';

const Drawers = () => {
  const { drawerStack } = useDrawer();

  return (
    <AnimatePresence>
      {drawerStack.map((drawerStack, index) => (
        <motion.div
          key={index}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.2 }}
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
