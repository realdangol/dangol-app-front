import React from 'react';

import { Button } from '@/components';

type Props = {
  disabled?: boolean;
};

const SignUpSubmitButton = ({ disabled = false }: Props) => {
  return (
    <Button className="fixed bottom-4 max-w-[480px] w-full rounded-sm" disabled={disabled}>
      다음 단계
    </Button>
  );
};

export default SignUpSubmitButton;
