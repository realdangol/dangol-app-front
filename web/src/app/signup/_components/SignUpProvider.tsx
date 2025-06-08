'use client';

import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useState } from 'react';

import type { SignUpFormValues, SignUpStep } from '../types';

type SignUpState = {
  step: SignUpStep;
  formValues: SignUpFormValues;
  setStep: Dispatch<SetStateAction<SignUpStep>>;
  setFormValues: Dispatch<SetStateAction<SignUpFormValues>>;
};

const SignUpContext = createContext<SignUpState | null>(null);

export const SignUpProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState<SignUpStep>(5);
  const [formValues, setFormValues] = useState<SignUpFormValues>({
    serviceAgree: false,
    smsAgree: false,
    marketingAgree: false,
    name: '',
    phone: '',
    isVerify: false,
    gender: 'female',
    birthDate: '',
    address: '',
    detailedAddress: '',
  });

  return (
    <SignUpContext.Provider value={{ step, formValues, setStep, setFormValues }}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
