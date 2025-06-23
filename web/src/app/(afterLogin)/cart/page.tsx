import React from 'react';

import {
  CartAddress,
  CartBottomFixed,
  CartHeader,
  CartMenuList,
  CartTotalPayment,
} from './_components';

const CartPage = () => {
  return (
    <div className="m-w-[480px] w-full">
      <CartHeader />
      <div className="mb-[66px] pt-[113px] pb-[32px]">
        <CartAddress />
        <div className="p-4 flex flex-col gap-5">
          <CartMenuList />
          <CartTotalPayment />
        </div>
      </div>
      <CartBottomFixed />
    </div>
  );
};

export default CartPage;
