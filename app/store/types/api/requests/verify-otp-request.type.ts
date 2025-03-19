export type VerifyOTPAPIRequest = {
  phoneNumber: string;
  countryCode: string;
  otpInput: string;
};