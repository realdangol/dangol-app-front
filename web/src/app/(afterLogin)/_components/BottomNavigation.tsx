'use client';

import { CheckList, MyPage, Notification, Shop } from '@realdangol/jjindangol-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BottomNavigation = () => {
  const pathname = usePathname();

  if (['/cart'].includes(pathname)) return null;

  const items = [
    {
      name: '단골집',
      icon: <Notification />,
      href: '/',
    },
    {
      name: '?',
      icon: <Shop />,
      href: '/',
    },
    {
      name: '주문내역',
      icon: <CheckList />,
      href: '/',
    },
    {
      name: '마이페이지',
      icon: <MyPage />,
      href: '/',
    },
  ];

  return (
    <nav className="fixed bottom-0 z-[100] w-screen h-[60px] bg-white">
      <div className="max-w-[480px] h-full mx-auto flex">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="h-full px-m flex-1 flex flex-col gap-xxs items-center justify-center text-[11px] text-neutral-600"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
