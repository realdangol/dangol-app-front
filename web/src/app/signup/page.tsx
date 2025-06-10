'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

import {
  SignUpStep1Form,
  SignUpStep2Form,
  SignUpStep3Form,
  SignUpStep4Form,
  SignUpStep5Form,
} from './_components';
import { useSignUp } from './_hooks';

const SignUpPage = () => {
  const { step, storeFormValues } = useSignUp();
  const { data: session } = useSession();

  console.log(session);

  useEffect(() => {
    if (session) {
      storeFormValues({
        provider: session.user.provider,
        email: session.user.email,
      });
    }
  }, [session]);

  switch (step) {
    case 1:
    default:
      return <SignUpStep1Form />;
    case 2:
      return <SignUpStep2Form />;
    case 3:
      return <SignUpStep3Form />;
    case 4:
      return <SignUpStep4Form />;
    case 5:
      return <SignUpStep5Form />;
  }
};

export default SignUpPage;
