'use client';

import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const OAuthSignInButtonWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <button
      className={twMerge(
        clsx(
          'h-12 rounded-lg flex items-center justify-center text-label font-semibold',
          className,
        ),
      )}
      type="button"
    >
      {children}
    </button>
  );
};

const Naver = () => {
  return (
    <OAuthSignInButtonWrapper className="bg-[#03C75A] text-white">
      네이버 계정으로 시작하기
    </OAuthSignInButtonWrapper>
  );
};

const Kakao = () => {
  return (
    <OAuthSignInButtonWrapper className="bg-[#FEE500] text-[#1D1E1E]">
      카카오 계정으로 시작하기
    </OAuthSignInButtonWrapper>
  );
};

const Apple = () => {
  return (
    <OAuthSignInButtonWrapper className="bg-black text-white">
      애플 계정으로 시작하기
    </OAuthSignInButtonWrapper>
  );
};

const Google = () => {
  return (
    <OAuthSignInButtonWrapper className="bg-white text-neutral-800 border border-neutral-100">
      구글 계정으로 시작하기
    </OAuthSignInButtonWrapper>
  );
};

const OAuthSignInButton = {
  Naver,
  Kakao,
  Apple,
  Google,
};

export default OAuthSignInButton;
