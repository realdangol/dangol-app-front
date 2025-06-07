export type SignUpFormValues = {
  serviceAgree: boolean;
  smsAgree: boolean;
  marketingAgree: boolean;
  name: string;
  phone: string;
  isVerify: boolean;
};

export type SignUpStep1FormValues = Pick<
  SignUpFormValues,
  'serviceAgree' | 'smsAgree' | 'marketingAgree'
>;

export type SignUpStep2FormValues = Pick<SignUpFormValues, 'name' | 'phone' | 'isVerify'> & {
  code: string;
};
