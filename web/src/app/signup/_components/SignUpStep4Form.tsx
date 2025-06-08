'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import type { ChangeEvent } from 'react';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField } from '@/components';
import handleOnlyNumberChange from '@/utils/handleOnlyNumberChange';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { useSignUp } from '../_hooks';
import type { SignUpStep4FormValues } from '../types';
import SignUpSubmitButton from './SignUpSubmitButton';

const schema = yup.object().shape({
  birthDate: yup
    .string()
    .required()
    .matches(/^\d{8}$/, '8자리 숫자로 입력하세요 (예: 20250101)'),
});

const SignUpStep4Form = () => {
  const { formValues, setStep, storeFormValues } = useSignUp();
  const {
    formState: { isValid },
    register,
    handleSubmit,
  } = useForm<SignUpStep4FormValues>({
    defaultValues: {
      birthDate: formValues.birthDate || '',
    },
    resolver: yupResolver(schema),
  });

  const handleBirthDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnlyNumberChange(e);
  };

  const onValid: SubmitHandler<SignUpStep4FormValues> = ({ birthDate }) => {
    storeFormValues({
      birthDate,
    });
    setStep(5);
  };

  return (
    <form onSubmit={handleSubmit(onValid)} onKeyDown={preventSubmitByEnter}>
      <div>
        <TextField
          {...register('birthDate', {
            onChange: handleBirthDateChange,
          })}
          type="tel"
          label="생년월일"
          placeholder="생년월일을 입력해주세요."
          maxLength={8}
        />
      </div>
      <SignUpSubmitButton disabled={!isValid} />
    </form>
  );
};

export default SignUpStep4Form;
