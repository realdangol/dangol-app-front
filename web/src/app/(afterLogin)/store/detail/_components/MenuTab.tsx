'use client';

import { Tabs } from '@realdangol/jjindangol-ui';
import React, { useState } from 'react';

const MenuTab = () => {
  const [activeTab, setActiveTab] = useState('signature');

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div>
      <Tabs
        variant="depth2"
        activeTab={activeTab}
        items={[
          {
            label: '대표메뉴',
            value: 'signature',
          },
          {
            label: '사이드메뉴',
            value: 'side',
          },
          {
            label: '세트메뉴',
            value: 'set',
          },
          {
            label: '음료',
            value: 'drink',
          },
        ]}
        onTabClick={handleTabClick}
      />
    </div>
  );
};

export default MenuTab;
