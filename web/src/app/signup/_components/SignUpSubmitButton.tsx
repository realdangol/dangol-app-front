'use client';

import React from 'react';

import { Button } from '@/components';

type Props = {
  disabled?: boolean;
};

const SignUpSubmitButton = ({ disabled = false }: Props) => {
  return (
    <div className="fixed left-0 right-0 bottom-4 w-screen px-4">
      <Button className="max-w-[480px] w-full rounded-sm mx-auto" disabled={disabled}>
        다음 단계
      </Button>
    </div>
  );
};

export default SignUpSubmitButton;
