'use client';

import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useState } from 'react';

type SignUpStep = 1 | 2 | 3 | 4 | 5 | 6;

type SignUpFormValues = {
  serviceAgree: boolean;
  smsAgree: boolean;
  marketingAgree: boolean;
};

type SignUpState = {
  step: SignUpStep;
  formValues: SignUpFormValues;
  setStep: Dispatch<SetStateAction<SignUpStep>>;
  setFormValues: Dispatch<SetStateAction<SignUpFormValues>>;
};

const SignUpContext = createContext<SignUpState | null>(null);

export const SignUpProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState<SignUpStep>(1);
  const [formValues, setFormValues] = useState<SignUpFormValues>({
    serviceAgree: false,
    smsAgree: false,
    marketingAgree: false,
  });

  return (
    <SignUpContext.Provider value={{ step, formValues, setStep, setFormValues }}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
