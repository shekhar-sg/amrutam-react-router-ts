import {
  Box,
  type BoxProps,
  Button,
  Flex,
  type FlexProps,
  Input,
  PinInput,
  type TextInputProps,
  ThemeIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import clsx from "clsx";
import { type ReactNode, useMemo, useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import AmrutamLogo from "~/assets/amrutam-logo";
import "react-phone-number-input/style.css";
import Typography from "~/components/atoms/typography";
import useRemainingTime from "~/hooks/useRemainingTime";
import { useGetOTPMutation, useVerifyOTPMutation } from "~/store/apis/user.api";

type LoginFlowTemplate = Record<
  0 | 1,
  {
    title: ReactNode;
    buttonText: ReactNode;
    InputField: ReactNode;
    onSubmit: (values: InitialValues) => void;
  }
>;

type InitialValues = {
  phoneNumber: string;
  otp: string;
};

const LoginBox = (props: BoxProps) => {
  const [getOtp, { isLoading: isSendOtpLoading }] = useGetOTPMutation();
  const [verifyOTP] = useVerifyOTPMutation();
  const [step, setStep] = useState<keyof LoginFlowTemplate>(0);
  const [otpCountDownStartTime, setOTPCountDownStartTime] = useState(
    Date.now(),
  );
  const { errors, getInputProps, onSubmit, getValues } = useForm<InitialValues>(
    {
      name: "login-form",
      initialValues: {
        phoneNumber: "",
        otp: "",
      },
      validateInputOnChange: true,
      validate: {
        phoneNumber: (value) => {
          if (value && !isValidPhoneNumber(value)) {
            return "Invalid phone number";
          }
          return null;
        },
        otp: (value) => {
          if (step === 1 && !value) {
            return "OTP is required";
          }
          return null;
        },
      },
    },
  );

  const error = useMemo(() => {
    if (step === 0) {
      return errors.phoneNumber;
    } else return errors.otp;
  }, [errors.otp, errors.phoneNumber, step]);

  const template = useMemo<LoginFlowTemplate>(() => {
    return {
      0: {
        title: "Login with Phone Number",
        buttonText: "Send OTP",
        InputField: (
          <PhoneInput
            international
            defaultCountry={"IN"}
            placeholder="Enter your phone number"
            focusInputOnCountrySelection
            inputComponent={Input}
            containerComponent={Flex}
            containerComponentProps={
              {
                bd: `2px solid ${errors.phoneNumber ? "red" : "gray.6"}`,
                px: 8,
                align: "flex-start",
                gap: 16,
                mb: errors.phoneNumber ? 8 : 24,
                style: {
                  borderRadius: 8,
                },
              } satisfies FlexProps
            }
            numberInputProps={
              {
                name: "phoneNumber",
                classNames: {
                  input: "focus:!border-none",
                },
                variant: "unstyled",
              } satisfies TextInputProps
            }
            {...getInputProps("phoneNumber")}
          />
        ),
        onSubmit: ({ phoneNumber }) => {
          if (isValidPhoneNumber(phoneNumber)) {
            const parsedNumber = parsePhoneNumber(phoneNumber);
            if (parsedNumber) {
              const { nationalNumber, countryCallingCode } = parsedNumber;
              getOtp({
                phoneNumber: nationalNumber,
                countryCode: `+${countryCallingCode}`,
              })
                .unwrap()
                .then(() => {
                  setStep(1);
                  setOTPCountDownStartTime(Date.now());
                });
            }
          }
        },
      },
      1: {
        title: (
          <>
            We&#39;ve sent a 6 digit OTP to the number :{" "}
            <strong>{getValues().phoneNumber}</strong>
          </>
        ),
        buttonText: "Verify OTP",
        InputField: (
          <PinInput
            oneTimeCode
            length={6}
            aria-label={"One time code"}
            mb={errors.otp ? 8 : 24}
            {...getInputProps("otp")}
          />
        ),
        onSubmit: ({ phoneNumber, otp }) => {
          if (isValidPhoneNumber(phoneNumber)) {
            const parsedNumber = parsePhoneNumber(phoneNumber);
            if (parsedNumber) {
              const { nationalNumber, countryCallingCode } = parsedNumber;
              verifyOTP({
                phoneNumber: nationalNumber,
                countryCode: `+${countryCallingCode}`,
                otpInput: otp,
              })
                .unwrap()
                .then((value) => {
                  console.log("verified", value);
                });
            }
          }
        },
      },
    };
  }, [
    errors.otp,
    errors.phoneNumber,
    getInputProps,
    getOtp,
    getValues,
    verifyOTP,
  ]);

  return (
    <Box
      component={"form"}
      w={"50%"}
      mx={"auto"}
      p={32}
      onSubmit={onSubmit(template[step].onSubmit)}
      {...props}
    >
      <ThemeIcon
        size={120}
        variant={"transparent"}
        style={{
          overflow: "hidden",
        }}
        mb={16}
      >
        <AmrutamLogo />
      </ThemeIcon>
      <Typography c={"gray.6"} fw={"600"} fontVariant={"body"} mb={8}>
        {template[step].title}
      </Typography>
      {template[step].InputField}
      {error && (
        <Typography c={"red"} mb={24}>
          {error}
        </Typography>
      )}
      <Button fullWidth mb={16} type={"submit"} disabled={isSendOtpLoading}>
        {template[step].buttonText}
      </Button>
      {step === 1 && (
        <OTPCountDown
          startTime={otpCountDownStartTime}
          onResend={() => {
            setOTPCountDownStartTime(Date.now());
            console.log("otp resend");
          }}
        />
      )}
      <Typography fw={"bold"} c={"gray.6"} ta={"center"}>
        *Please do not refresh the page. Complete the process*
      </Typography>
    </Box>
  );
};

export default LoginBox;

interface OTPCountDown {
  startTime: number;
  onResend?: () => void;
}

const OTPCountDown = ({ startTime, onResend }: OTPCountDown) => {
  const { isRemaining, message } = useRemainingTime({
    startTime,
    duration: 90,
    durationUnit: "seconds",
    interval: 1000,
    setCustomMessage: ({ remainingTime, durationUnit, isRemaining }) => {
      if (!isRemaining) {
        return "Resend OTP";
      }
      return `OTP will expire in ${remainingTime} ${durationUnit}`;
    },
  });
  return (
    <Typography
      c={isRemaining ? "gray.6" : "gray.8"}
      fw={"600"}
      fontVariant={"body"}
      mb={24}
      ta={"center"}
      component={"div"}
      className={clsx("w-fit", {
        "cursor-pointer hover:!underline": !isRemaining,
      })}
      onClick={() => {
        if (!isRemaining) {
          onResend?.();
        }
      }}
    >
      {message}
    </Typography>
  );
};
