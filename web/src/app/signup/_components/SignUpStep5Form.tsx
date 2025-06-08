'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import type { Resolver } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, TextField } from '@/components';

import type { SignUpStep5FormValues } from '../types';
import SignUpSubmitButton from './SignUpSubmitButton';

const schema = yup.object().shape({
  address: yup.string().required('주소를 입력해주세요.'),
  detailedAddress: yup.string().notRequired(),
});

const SignUpStep5Form = () => {
  const {
    formState: { isValid },
    register,
    setValue,
  } = useForm<SignUpStep5FormValues>({
    defaultValues: {
      address: '',
      detailedAddress: '',
    },
    resolver: yupResolver(schema) as Resolver<SignUpStep5FormValues>,
  });

  const openDaumPostcodeModal = useDaumPostcodePopup();

  const handleComplete = (address: Address) => {
    setValue('address', address.address, { shouldValidate: true });
  };

  const handleSearchAddressClick = () => {
    openDaumPostcodeModal({
      popupTitle: '주소 검색',
      onComplete: handleComplete,
    });
  };

  return (
    <form>
      <div className="flex flex-col gap-1">
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
            onClick={handleSearchAddressClick}
          >
            주소 검색
          </Button>
        </div>
        <TextField {...register('detailedAddress')} placeholder="상세주소를 입력해주세요." />
      </div>
      <SignUpSubmitButton disabled={!isValid} />
    </form>
  );
};

export default SignUpStep5Form;
