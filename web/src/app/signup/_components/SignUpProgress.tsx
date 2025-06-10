'use client';

import clsx from 'clsx';
import React from 'react';

import useSignUp from '../_hooks/useSignUp';

const SignUpProgress = () => {
  const { step } = useSignUp();

  return (
    <div className="flex justify-between gap-2 w-full px-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={clsx(
            'w-[60px] h-1 rounded-xs flex-1',
            step > index ? 'bg-brand-700' : 'bg-neutral-300',
          )}
        />
      ))}
    </div>
  );
};

export default SignUpProgress;
