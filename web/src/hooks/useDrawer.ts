import { useContext } from 'react';

import { DrawerContext } from '@/components/Drawer/DrawerProvider';

const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) throw Error('DrawerProvider 사용해주세요.');

  const { drawerStack, push, pop } = context;

  return {
    drawerStack,
    push,
    pop,
  };
};

export default useDrawer;
