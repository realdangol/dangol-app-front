'use client';

import { RadioGroup } from '@realdangol/jjindangol-ui';
import React, { useState } from 'react';

import { useSignUp } from '../_hooks';
import SignUpSubmitButton from './SignUpSubmitButton';

const SignUpStep3Form = () => {
  const { formValues, setStep, storeFormValues } = useSignUp();
  const [gender, setGender] = useState(formValues.gender);

  const handleSubmit = () => {
    setStep(4);
    storeFormValues({
      gender,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4">
        <RadioGroup
          title="성별"
          value={gender}
          options={[
            {
              label: '여성',
              value: 'female',
            },
            {
              label: '남성',
              value: 'male',
            },
          ]}
          direction="horizontal"
          gap={20}
          onChange={(value) => setGender(value)}
        />
      </div>
      <SignUpSubmitButton />
    </form>
  );
};

export default SignUpStep3Form;
