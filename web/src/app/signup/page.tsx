'use client';

import React from 'react';

import {
  SignUpStep1Form,
  SignUpStep2Form,
  SignUpStep3Form,
  SignUpStep4Form,
  SignUpStep5Form,
} from './_components';
import { useSignUp } from './_hooks';

const SignUpPage = () => {
  const { step } = useSignUp();

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
