'use client';

import { CheckBox } from '@realdangol/jjindangol-ui';
import React from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import type { SignUpStep1FormValues } from '../types';
import SignUpAgreeCheckBoxLabel from './SignUpAgreeCheckBoxLabel';

type Props = {
  control: Control<SignUpStep1FormValues>;
  name: keyof SignUpStep1FormValues;
};

const SignUpAgreeCheckBox = ({ control, name }: Props) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <CheckBox
      label={<SignUpAgreeCheckBoxLabel name={name} />}
      checked={field.value}
      onChange={field.onChange}
    />
  );
};

export default SignUpAgreeCheckBox;
