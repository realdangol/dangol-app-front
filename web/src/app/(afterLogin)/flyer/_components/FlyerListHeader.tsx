'use client';

import { Button } from '@realdangol/jjindangol-ui';
import React from 'react';

const FlyerListHeader = () => {
  return (
    <header className="px-4 pt-4 fixed top-0 left-0 right-0 z-[100] bg-white">
      <div className="max-w-[480px] h-[32px] mx-auto flex items-center justify-between">
        <h2 className="typo-body1-medium">
          내 전단지 <strong className="">20개</strong>
        </h2>
        <Button variant="outlinePrimary" size="small">
          전단지등록
        </Button>
      </div>
    </header>
  );
};

export default FlyerListHeader;
