import {
  Box,
  type BoxProps,
  Button,
  Flex,
  type FlexProps,
  Input,
  type TextInputProps,
  ThemeIcon,
} from "@mantine/core";
import { useField } from "@mantine/form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import AmrutamLogo from "~/assets/amrutam-logo";
import "react-phone-number-input/style.css";
import Typography from "~/components/atoms/typography";

const LoginBox = (props: BoxProps) => {
  const { error, getInputProps } = useField({
    mode: "uncontrolled",
    initialValue: "",
    validateOnChange: true,
    validate: (value) =>
      isValidPhoneNumber(value, {
        defaultCountry: "IN",
      })
        ? undefined
        : "Invalid phone number",
  });
  return (
    <Box w={"50%"} mx={"auto"} p={32} {...props}>
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
        Please Signup/Login to continue
      </Typography>
      <PhoneInput
        international
        defaultCountry={"IN"}
        placeholder="Enter your phone number"
        focusInputOnCountrySelection
        inputComponent={Input}
        containerComponent={Flex}
        containerComponentProps={
          {
            bd: `2px solid ${error ? "red" : "gray.6"}`,
            px: 8,
            align: "flex-start",
            gap: 16,
            mb: error ? 8 : 24,
            style: {
              borderRadius: 8,
            },
          } satisfies FlexProps
        }
        numberInputProps={
          {
            classNames: {
              input: "focus:!border-none",
            },
            variant: "unstyled",
          } satisfies TextInputProps
        }
        {...getInputProps()}
      />
      {error && (
        <Typography c={"red"} mb={24}>
          {error}
        </Typography>
      )}
      <Button fullWidth mb={16}>
        Sent OTP
      </Button>
      <Typography fw={"bold"} c={"gray.6"} ta={"center"}>
        *Please do not refresh the page. Complete the process*
      </Typography>
    </Box>
  );
};

export default LoginBox;
