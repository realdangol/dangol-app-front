'use client';

import Image from 'next/image';
import React from 'react';

import LogoImage from '@/public/images/logo.png';

import { OAuthSignInButton } from './_components';

const LoginPage = () => {
  return (
    <>
      <Image src={LogoImage} alt={'찐단골 로고'} width={180} height={180} />
      <div className="flex flex-col gap-4 mt-7 w-full">
        <OAuthSignInButton.Naver />
        <OAuthSignInButton.Kakao />
        <OAuthSignInButton.Apple />
        <OAuthSignInButton.Google />
      </div>
    </>
  );
};

export default LoginPage;
