'use client';

import React from 'react';

import useSignUp from '../_hooks/useSignUp';

const SignUpSubTitle = () => {
  const { step } = useSignUp();
  const subTitles = [
    '찐단골 서비스 이용약관에\n동의해 주세요.',
    '본인인증을 해주세요.',
    '성별을 알려주세요.',
    '생년월일을 알려주세요.',
    '주소를 알려주세요.',
  ];

  return (
    <h2 className="my-5 px-4 typo-h1 font-normal whitespace-pre text-neutral-800">
      {subTitles[step - 1]}
    </h2>
  );
};

export default SignUpSubTitle;
