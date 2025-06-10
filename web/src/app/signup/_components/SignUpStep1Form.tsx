'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CheckBox } from '@/components';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { useSignUp } from '../_hooks';
import type { SignUpStep1FormValues } from '../types';
import SignUpAgreeCheckBox from './SignUpAgreeCheckBox';
import SignUpSubmitButton from './SignUpSubmitButton';

const schema = yup.object().shape({
  serviceAgree: yup.boolean().required().oneOf([true]),
  smsAgree: yup.boolean().required().oneOf([true]),
  marketingAgree: yup.boolean().required(),
});

const SignUpStep1Form = () => {
  const { formValues, setStep, storeFormValues } = useSignUp();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
    setValue,
  } = useForm<SignUpStep1FormValues>({
    defaultValues: {
      serviceAgree: formValues.serviceAgree || false,
      smsAgree: formValues.smsAgree || false,
      marketingAgree: formValues.marketingAgree || false,
    },
    resolver: yupResolver(schema),
  });
  const allAgreed = watch('serviceAgree') && watch('smsAgree') && watch('marketingAgree');

  const onValid: SubmitHandler<SignUpStep1FormValues> = (data) => {
    storeFormValues(data);
    setStep(2);
  };

  const agreeList: (keyof SignUpStep1FormValues)[] = ['serviceAgree', 'smsAgree', 'marketingAgree'];

  return (
    <form onSubmit={handleSubmit(onValid)} onKeyDown={preventSubmitByEnter}>
      <div className="px-4">
        <div className="py-4 px-3 border border-neutral-300 rounded-xl">
          <CheckBox
            label={<span className="dangol-typo-body1-regular text-neutral-600">전체 동의</span>}
            checked={allAgreed}
            onChange={() => {
              const nextValue = !allAgreed;

              setValue('serviceAgree', nextValue, { shouldValidate: true });
              setValue('smsAgree', nextValue, { shouldValidate: true });
              setValue('marketingAgree', nextValue, { shouldValidate: true });
            }}
          />
        </div>
        <div className="flex flex-col gap-3 mt-4 px-3">
          {agreeList.map((name) => (
            <SignUpAgreeCheckBox key={name} name={name} control={control} />
          ))}
        </div>
      </div>
      <SignUpSubmitButton disabled={!isValid} />
    </form>
  );
};

export default SignUpStep1Form;
