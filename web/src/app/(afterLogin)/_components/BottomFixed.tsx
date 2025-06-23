import React from 'react';

type Props = {
  height?: number;
  bottom?: number;
  children?: React.ReactNode;
};

const BottomFixed = ({ height = 60, bottom = 0, children }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100]">
      <div
        className="max-w-[480px] mx-auto shadow-[0px_0px_2px_0px_#0000001F] shadow-[0px_0px_8px_0px_#0000001A] bg-white px-m flex justify-between items-center rounded-t-lg"
        style={{
          height,
          bottom,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomFixed;
