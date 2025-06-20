'use client';

import Image from 'next/image';
import React from 'react';

import LogoImage from '@/public/images/logo.png';

import { OAuthSignInButton } from './_components';

const LoginPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image src={LogoImage} alt={'찐단골 로고'} width={180} height={180} />
      <div className="flex flex-col gap-4 mt-7 w-full px-4">
        <OAuthSignInButton.Naver />
        <OAuthSignInButton.Kakao />
      </div>
    </div>
  );
};

export default LoginPage;
