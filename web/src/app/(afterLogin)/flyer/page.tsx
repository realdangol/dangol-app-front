import React from 'react';

import { Flyer, FlyerListHeader } from './_components';

const FlyerPage = () => {
  return (
    <div className="w-full">
      {/* <EmptyFlyer /> */}
      <FlyerListHeader />
      <div className="pt-[80px] pb-[72px] flex flex-col gap-2">
        <Flyer />
        <Flyer />
        <Flyer />
        <Flyer />
        <Flyer />
        <Flyer />
        <Flyer />
      </div>
    </div>
  );
};

export default FlyerPage;
