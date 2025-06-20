'use client';

import { AlertCircle, Button } from '@realdangol/jjindangol-ui';
import React from 'react';

import useDialog from '@/components/Dialog/useDialog';
import colors from '@/constants/colors';

const DuplicatePhoneModal = () => {
  const { closeDialog } = useDialog();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <AlertCircle color={colors.error600} />
        <h1 className="text-h1 font-normal text-neutral-800">계정확인</h1>
      </div>
      <p className="text-h2-medium font-normal text-neutral-600">
        동일한 휴대전화번호로 가입된 계정이 있습니다.
      </p>
      <Button className="w-[120px] self-end rounded-sm" onClick={() => closeDialog()}>
        확인
      </Button>
    </div>
  );
};

export default DuplicatePhoneModal;
