import { useContext } from 'react';

import { DrawerContext } from '@/components/Drawer/DrawerProvider';

const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) throw Error('DrawerProvider 사용해주세요.');

  const { drawerStack, push, pop, clear } = context;

  return {
    drawerStack,
    push,
    pop,
    clear,
  };
};

export default useDrawer;
