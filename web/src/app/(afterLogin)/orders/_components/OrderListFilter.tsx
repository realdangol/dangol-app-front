'use client';

import { ArrowDown } from '@realdangol/jjindangol-ui';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { Dropdown } from '@/components';

const OrderListFilter = () => {
  const menus = ['전체', '단골가게 AAAAAAAAAAA', '단골가게 B', '단골가게 C', '단골가게 D'];

  return (
    <div className="sticky top-[56px] p-4 mt-[56px] flex justify-between items-center bg-white">
      <span className="typo-body1-medium text-neutral-600">총 10건</span>
      <Dropdown closeOnBlur>
        <Dropdown.Trigger>
          {(open) => (
            <div className="w-[104px] h-[36px] flex items-center justify-center gap-xxs border-[1.5px] border-neutral-200 rounded-lg typo-body1-medium text-neutral-600 cursor-pointer">
              전체
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowDown />
              </motion.div>
            </div>
          )}
        </Dropdown.Trigger>
        <Dropdown.List className="absolute w-[104px] h-[240px] overflow-auto border border-neutral-200 rounded-lg shadow-[0px_4px_8px_0px_#00000014] scrollbar-hide bg-white">
          {menus.map((menu, index) => (
            <Dropdown.Item
              key={menu}
              className={clsx(
                'h-[48px] px-s flex items-center overflow-hidden text-ellipsis whitespace-nowrap typo-body3-regular text-neutral-800 cursor-pointer',
                index > 0 && 'border-t border-neutral-200',
              )}
            >
              {menu}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </div>
  );
};

export default OrderListFilter;
