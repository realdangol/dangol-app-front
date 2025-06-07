import { useContext } from 'react';

import SignUpContext from '../_components/SignUpProvider';

const useSignUp = () => {
  const signUpContext = useContext(SignUpContext);

  if (!signUpContext) throw Error('SignUpProvider 안에서 사용해주세요.');

  const { step, formValues, setStep, setFormValues } = signUpContext;

  return {
    step,
    formValues,
    setStep,
    setFormValues,
  };
};

export default useSignUp;
