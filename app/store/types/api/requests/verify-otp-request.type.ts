export type VerifyOTPRequest = {
  phoneNumber: string;
  countryCode: string;
  otpInput: string;
};