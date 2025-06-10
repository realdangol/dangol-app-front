import type { ReactNode } from 'react';
import React from 'react';

import { SignUpHeader, SignUpProgress, SignUpSubTitle } from './_components';
import { SignUpProvider } from './_components/SignUpProvider';

type Props = {
  children: ReactNode;
};

const SignUpPageLayout = ({ children }: Props) => {
  return (
    <SignUpProvider>
      <div className="relative w-full h-full">
        <SignUpHeader />
        <div className="pt-5 pb-10">
          <SignUpProgress />
          <SignUpSubTitle />
          {children}
        </div>
      </div>
    </SignUpProvider>
  );
};

export default SignUpPageLayout;
