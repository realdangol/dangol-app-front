'use client';

import Postcode from '@actbase/react-daum-postcode';
import type { OnCompleteParams } from '@actbase/react-daum-postcode/lib/types';
import { X } from '@realdangol/jjindangol-ui';
import React from 'react';

type Props = {
  onSelected: (address: OnCompleteParams) => void;
  onClose: () => void;
};

const DaumPostCode = ({ onSelected, onClose }: Props) => {
  return (
    <div className="absolute left-0 top-0 w-full max-w-[480px] h-full flex flex-col bg-white overflow-hidden post-code-modal">
      <div className="relative h-[48px] flex justify-center items-center">
        <h2>주소 검색</h2>
        <button type="button" className="absolute right-3" onClick={onClose}>
          <X />
        </button>
      </div>
      <Postcode
        style={{ flex: 1, width: '100%' }}
        jsOptions={{ animation: true }}
        onSelected={onSelected}
        // onSelected={(data) => {
        //   setValue('address', data.address, { shouldValidate: true });
        //   setShowPostCode(false);
        // }}
        onError={() => {}}
      />
    </div>
  );
};

export default DaumPostCode;
