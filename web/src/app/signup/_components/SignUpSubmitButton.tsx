'use client';

import { Button } from '@realdangol/jjindangol-ui';
import React from 'react';

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
