'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';
import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import type { Resolver, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, TextField, Timer } from '@/components';
import useDialog from '@/components/Dialog/useDialog';
import handleOnlyNumberChange from '@/utils/handleOnlyNumberChange';

import { useSignUp } from '../_hooks';
import type { SignUpStep2FormValues } from '../types';
import DuplicatePhoneModal from './DuplicatePhoneModal';
import SignUpSubmitButton from './SignUpSubmitButton';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  code: yup.string().notRequired(),
  isVerify: yup.boolean().required().oneOf([true]),
});

const SignUpStep2Form = () => {
  const { openDialog } = useDialog();
  const { formValues, setStep, storeFormValues } = useSignUp();
  const {
    formState: { errors, isValid },
    register,
    getValues,
    setValue,
    setError,
    watch,
    clearErrors,
    handleSubmit,
  } = useForm<SignUpStep2FormValues>({
    defaultValues: {
      name: formValues.name || '',
      phone: formValues.phone || '',
      code: '',
      isVerify: formValues.isVerify || false,
    },
    resolver: yupResolver(schema) as Resolver<SignUpStep2FormValues>,
  });
  const isVerified = watch('isVerify');
  const [isRequestVerificationCode, setIsRequestVerificationCode] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const requestVerificationCode = async () => {
    if (isRequestVerificationCode) setIsRequestVerificationCode(false);
    if (isExpired) setIsExpired(false);

    clearErrors(['phone', 'code']);

    try {
      await axios.post('/mock/auth/phone/send-code', {
        phone: getValues('phone'),
      });
      setIsRequestVerificationCode(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.status) {
          case 409:
            openDialog(<DuplicatePhoneModal />, { withCloseButton: false });
            break;
        }
      }
    }
  };

  const verify = async () => {
    if (isExpired) {
      setError('code', { message: '인증 시간이 만료되었습니다.' });
      return;
    }

    try {
      await axios.post('/mock/auth/phone/verify-code', {
        code: getValues('code'),
      });
      setValue('isVerify', true, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.status) {
          case 400:
            setError('code', { message: '인증번호가 틀렸습니다.' });
            break;
        }
      }
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearErrors('phone');
    handleOnlyNumberChange(e);
  };

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearErrors('code');
    handleOnlyNumberChange(e);
  };

  const onValid: SubmitHandler<SignUpStep2FormValues> = ({ name, phone, isVerify }) => {
    storeFormValues({
      name,
      phone,
      isVerify,
    });
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div className="flex flex-col gap-5 px-4">
        <TextField {...register('name')} label="이름" placeholder="이름을 입력해주세요." />
        <div className={clsx('flex gap-2', !!errors.phone ? 'items-center' : 'items-end')}>
          <div className="flex-1">
            <TextField
              {...register('phone', {
                onChange: handlePhoneChange,
              })}
              type="tel"
              label="휴대폰번호"
              placeholder="휴대폰번호 입력 (‘-’제외)"
              maxLength={11}
              error={!!errors.phone}
              helperText={{
                value: errors.phone?.message as string,
              }}
            />
          </div>
          <Button
            type="button"
            className="w-[128px] rounded-sm"
            variant="outlineNeutral"
            disabled={watch('phone').length < 11 || isVerified}
            onClick={requestVerificationCode}
          >
            {isRequestVerificationCode ? '재전송' : '인증번호 전송'}
          </Button>
        </div>
        {isRequestVerificationCode && !isVerified && (
          <div className={clsx('flex gap-2', !!errors.code ? 'items-center' : 'items-end')}>
            <div className="flex-1">
              <TextField
                {...register('code', {
                  onChange: handleCodeChange,
                })}
                type="tel"
                label="인증번호"
                placeholder="인증번호 입력"
                error={!!errors.code}
                maxLength={4}
                helperText={{
                  value: errors.code?.message as string,
                }}
                rightIcon={<Timer onExpire={() => setIsExpired(true)} />}
              />
            </div>
            <Button
              type="button"
              className="w-[128px] rounded-sm"
              variant="outlinePrimary"
              onClick={verify}
            >
              인증하기
            </Button>
          </div>
        )}
      </div>
      <SignUpSubmitButton disabled={!isValid} />
    </form>
  );
};

export default SignUpStep2Form;
