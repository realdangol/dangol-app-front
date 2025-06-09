export type SignUpStep = 1 | 2 | 3 | 4 | 5 | 6;
export type SignUpFormValues = {
  provider: string | null;
  email: string;
  serviceAgree: boolean;
  smsAgree: boolean;
  marketingAgree: boolean;
  name: string;
  phone: string;
  isVerify: boolean;
  gender: string;
  birthDate: string;
  address: string;
  detailedAddress: string;
};
export type SignUpStep1FormValues = Pick<
  SignUpFormValues,
  'serviceAgree' | 'smsAgree' | 'marketingAgree'
>;
export type SignUpStep2FormValues = Pick<SignUpFormValues, 'name' | 'phone' | 'isVerify'> & {
  code: string;
};
export type SignUpStep4FormValues = Pick<SignUpFormValues, 'birthDate'>;
export type SignUpStep5FormValues = Pick<SignUpFormValues, 'address' | 'detailedAddress'>;
