'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import type { Resolver, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, DaumPostCode, TextField } from '@/components';

import { useSignUp } from '../_hooks';
import type { SignUpStep5FormValues } from '../types';
import SignUpSubmitButton from './SignUpSubmitButton';

const schema = yup.object().shape({
  address: yup.string().required('주소를 입력해주세요.'),
  detailedAddress: yup.string().notRequired(),
});

const SignUpStep5Form = () => {
  const { formValues } = useSignUp();
  const {
    formState: { isValid },
    register,
    setValue,
    handleSubmit,
  } = useForm<SignUpStep5FormValues>({
    defaultValues: {
      address: '',
      detailedAddress: '',
    },
    resolver: yupResolver(schema) as Resolver<SignUpStep5FormValues>,
  });
  const [showPostCode, setShowPostCode] = useState(false);

  const onValid: SubmitHandler<SignUpStep5FormValues> = async ({ address, detailedAddress }) => {
    try {
      const { provider, email, marketingAgree, name, phone, gender, birthDate } = formValues;

      await axios.post('/mock/signup', {
        provider,
        email,
        marketingAgree,
        name,
        phone,
        gender,
        birthDate,
        address,
        detailedAddress,
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        switch (err.status) {
          default:
            break;
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div className="flex flex-col gap-1 px-4">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <TextField
              {...register('address')}
              label="매장 주소"
              placeholder="주소를 입력해주세요."
              readOnly
            />
          </div>
          <Button
            type="button"
            className="w-[120px]"
            variant="outlinePrimary"
            onClick={() => setShowPostCode(true)}
          >
            주소 검색
          </Button>
        </div>
        <TextField {...register('detailedAddress')} placeholder="상세주소를 입력해주세요." />
      </div>
      <SignUpSubmitButton disabled={!isValid} />
      {showPostCode && (
        <DaumPostCode
          onClose={() => setShowPostCode(false)}
          onSelected={({ address }) => {
            setValue('address', address, { shouldValidate: true });
            setShowPostCode(false);
          }}
        />
      )}
    </form>
  );
};

export default SignUpStep5Form;
