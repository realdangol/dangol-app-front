'use client';

import { ArrowLeft } from '@realdangol/jjindangol-ui';
import { useRouter } from 'next/navigation';
import React from 'react';

import colors from '@/constants/colors';

import { useSignUp } from '../_hooks';
import type { SignUpStep } from '../types';

const SignUpHeader = () => {
  const router = useRouter();
  const { step, setStep } = useSignUp();

  const back = () => {
    if (step === 1) {
      router.replace('/login');
    } else {
      setStep((step - 1) as SignUpStep);
    }
  };

  return (
    <header className="relative h-14 px-4 flex items-center justify-center">
      <button type="button" className="absolute left-4" onClick={back}>
        <ArrowLeft color={colors.neutral800} />
      </button>
      <h1 className="text-[22px] leading-[24px] text-neutral-800">회원가입</h1>
    </header>
  );
};

export default SignUpHeader;
