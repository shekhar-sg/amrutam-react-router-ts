import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetOTPAPIRequest } from "~/store/types/api/requests/get-otp-request.type";
import type { VerifyOTPAPIRequest } from "~/store/types/api/requests/verify-otp-request.type";

const backendAPI = createApi({
  reducerPath: "backendAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/backend/v1",
  }),
  endpoints: (build) => {
    return {
      getOTP: build.mutation<object, GetOTPAPIRequest>({
        query: (body) => ({
          method: "POST",
          url: "patient/send-OTP",
          body,
        }),
      }),
      verifyOTP: build.mutation<object, VerifyOTPAPIRequest>({
        query: (body) => ({
          method: "POST",
          url: "patient/verify-OTP",
          body,
        }),
      }),
    };
  },
});

export default backendAPI;

export const { useGetOTPMutation, useVerifyOTPMutation } = backendAPI;
