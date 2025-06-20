'use client';

import { Button, TextField } from '@realdangol/jjindangol-ui';
import Image from 'next/image';
import React, { useState } from 'react';

import EmptyImage from '@/public/images/flyer/empty-flyer.png';

const EmptyFlyer = () => {
  const [showInvitationCodeInput, setShowInvitationCodeInput] = useState(false);

  return (
    <div className="h-dvh px-4 flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-2">
        <h2 className="typo-h1 text-neutral-800 text-center">아직 등록 된 단골 가게가 없어요</h2>
        <p className="typo-label text-neutral-600 text-center">
          단골가게로 초대 받아야
          <br />
          서비스를 이용할 수 있어요
        </p>
      </div>
      <Image
        src={EmptyImage}
        alt="아직 등록 된 단골 가게가 없어요"
        width={260}
        height={200}
        className="object-cover"
      />
      <div className="w-full flex flex-col items-center gap-4">
        {showInvitationCodeInput ? (
          <div className="max-w-[340px] w-full">
            <TextField label="초대코드를 입력해주세요." />
            <strong className="text-[13px] text-neutral-800 font-semibold underline">
              초대코드가 어디에있나요?
            </strong>
          </div>
        ) : (
          <>
            <Button
              className="max-w-[340px] w-full"
              size="medium"
              type="button"
              onClick={() => setShowInvitationCodeInput(true)}
            >
              전단지 등록
            </Button>
            <button type="button" className="typo-body3-regular text-neutral-600">
              단골가게 초대 받는 방법
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmptyFlyer;
