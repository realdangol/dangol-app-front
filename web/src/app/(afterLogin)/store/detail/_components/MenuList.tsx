import Image from 'next/image';
import React from 'react';

const menus = {
  signature: [
    {
      name: '[고민 없이] 제육 한상',
      price: 12000,
      largePrice: 14000,
    },
    {
      name: '된장찌개',
      price: 12000,
    },
    {
      name: '김치찌개',
      price: 12000,
    },
    {
      name: '육회 비빔밥',
      price: 12000,
      largePrice: 14000,
    },
  ],
  side: [
    {
      name: '물냉면',
      price: 7000,
    },
    {
      name: '만두',
      price: 7000,
    },
  ],
};

const MenuList = () => {
  return (
    <div className="px-4 mt-4">
      <div className="h-12 flex items-center">
        <h2 className="typo-body1-bold text-neutral-600">대표메뉴</h2>
      </div>
      {menus.signature.map((menu) => (
        <div key={menu.name} className="py-2 flex gap-4 border-b border-neutral-100" role="link">
          <div className="flex flex-col gap-2 flex-1">
            <p className="typo-body1-bold text-neutral-800">{menu.name}</p>
            <div className="flex flex-col gap-1 typo-label text-neutral-600">
              <span>
                {!!menu.largePrice && '기본 '} {menu.price.toLocaleString()}원
              </span>
              {!!menu.largePrice && <span>곱빼기 {menu.largePrice.toLocaleString()}원</span>}
            </div>
          </div>
          <Image src={'https://picsum.photos/200'} width={80} height={80} alt="qweqw" />
        </div>
      ))}
      <div className="h-12 flex items-center">
        <h2 className="typo-body1-bold text-neutral-600">사이드메뉴</h2>
      </div>
      {menus.side.map((menu) => (
        <div key={menu.name} className="py-2 flex gap-4 border-b border-neutral-100" role="link">
          <div className="flex flex-col gap-2 flex-1">
            <p className="typo-body1-bold text-neutral-800">{menu.name}</p>
            <div className="flex flex-col gap-1 typo-label text-neutral-600">
              <span>{menu.price.toLocaleString()}원</span>
            </div>
          </div>
          <Image src={'https://picsum.photos/200'} width={80} height={80} alt="qweqw" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
