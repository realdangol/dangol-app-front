import React from 'react';

const SignUpHeader = () => {
  return (
    <header className="relative h-14 flex items-center justify-center">
      <button type="button" className="absolute left-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 20L7 12L15 4"
            stroke="#1D1E1E"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <h1 className="text-[22px] font-bold leading-[24px] text-neutral-800">회원가입</h1>
    </header>
  );
};

export default SignUpHeader;
