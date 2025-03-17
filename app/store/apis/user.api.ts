import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetOTPRequest } from "~/store/types/api/requests/get-otp-request.type";
import type { VerifyOTPRequest } from "~/store/types/api/requests/verify-otp-request.type";

const backendAPI = createApi({
  reducerPath: "backendAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/backend/v1",
  }),
  endpoints: (build) => {
    return {
      getOTP: build.mutation<object, GetOTPRequest>({
        query: (body) => ({
          method: "POST",
          url: "patient/send-OTP",
          body,
        }),
      }),
      verifyOTP: build.mutation<object, VerifyOTPRequest>({
        query: (body) => ({
          method: "POST",
          url: "patient/verify-OTP",
          body,
        }),
      })
    };
  },
});

export default backendAPI;

export const { useGetOTPMutation,useVerifyOTPMutation } = backendAPI;
