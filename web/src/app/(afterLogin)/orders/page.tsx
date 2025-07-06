import React from 'react';

import { Header } from '../_components';
import { OrderItem, OrderListFilter } from './_components';

const OrderListPage = () => {
  return (
    <>
      <Header title="주문내역" />
      <div className="w-full">
        <OrderListFilter />
        <div className="mt-4 px-4 pb-[120px] flex flex-col gap-4">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </>
  );
};

export default OrderListPage;
