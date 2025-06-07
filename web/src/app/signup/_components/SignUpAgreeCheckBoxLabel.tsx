import React from 'react';

import type { SignUpStep1FormValues } from '../types';

type Props = {
  name: keyof SignUpStep1FormValues;
};

const SignUpAgreeCheckBoxLabel = ({ name }: Props) => {
  const required = name === 'serviceAgree' || name === 'smsAgree';
  const title = {
    serviceAgree: '서비스 이용약관동의',
    smsAgree: '문자서비스 이용약관 동의',
    marketingAgree: '광고성 정보 수신 동의',
  };

  return (
    <span className="text-body3-medium text-neutral-600">
      <strong className={required ? 'font-normal text-neutral-800' : ''}>
        ({required ? '필수' : '선택'})
      </strong>{' '}
      {title[name]}
    </span>
  );
};

export default SignUpAgreeCheckBoxLabel;
