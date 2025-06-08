import { useContext } from 'react';

import SignUpContext from '../_components/SignUpProvider';
import type { SignUpFormValues } from '../types';

const useSignUp = () => {
  const signUpContext = useContext(SignUpContext);

  if (!signUpContext) throw Error('SignUpProvider 안에서 사용해주세요.');

  const { step, formValues, setStep, setFormValues } = signUpContext;

  const storeFormValues = (data: Partial<SignUpFormValues>) => {
    setFormValues({
      ...formValues,
      ...data,
    });
  };

  return {
    step,
    formValues,
    setStep,
    storeFormValues,
  };
};

export default useSignUp;
