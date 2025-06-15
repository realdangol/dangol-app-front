import React from 'react';

import BottomNavigation from './_components/BottomNavigation';

const AfterLoginPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
};

export default AfterLoginPageLayout;
