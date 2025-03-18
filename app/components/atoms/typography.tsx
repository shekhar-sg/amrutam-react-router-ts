import {
  createPolymorphicComponent,
  Text,
  type TextProps,
} from "@mantine/core";
import clsx from "clsx";
import { forwardRef, type Ref } from "react";

export const TypographyResponsive = {
  "heading-xxlarge": {
    base: "h3",
    md: "h2",
    lg: "h1",
  },
  "heading-xlarge": {
    base: "h5",
    md: "h3",
    lg: "h2",
  },
  "heading-large": {
    base: "h6",
    md: "h4",
    lg: "h3",
  },
  "heading-medium": {
    base: "lg",
    md: "h5",
    lg: "h4",
  },
  "heading-small": {
    base: "md",
    md: "h6",
    lg: "h5",
  },
  "heading-xsmall": {
    base: "sm",
    md: "lg",
    lg: "h6",
  },
  body: {
    base: "sm",
    md: "md",
    lg: "lg",
  },
  "body-small": {
    base: "xs",
    md: "sm",
    lg: "md",
  },
  "body-xsmall": {
    base: "xs",
    md: "sm",
    lg: "sm",
  },
} as const satisfies Record<string, TextProps["fz"]>;

export type TypographyVariant = keyof typeof TypographyResponsive;

export type TypographyProps = {
  fontVariant?: TypographyVariant;
  underline?: boolean;
} & TextProps;
const TypographyCustomBasic = (
  props: TypographyProps,
  ref: Ref<HTMLParagraphElement>,
) => {
  const { fontVariant = "body", underline, ...rest } = props;

  const isHeading =
    fontVariant.includes("heading") || String(rest.fz).startsWith("h");

  return (
    <Text
      ref={ref}
      unstyled
      c={"primary"}
      w={'fit-content'}
      fw={isHeading ? "bold" : undefined}
      fz={TypographyResponsive[fontVariant]}
      lh={isHeading ? "140%" : "120%"}
      {...rest}
      className={clsx(rest.className, {
        "border-b-8 border-emerald-900/20 px-6 !leading-10": underline,
      })}
    />
  );
};

/**
 *
 * Typography component
 *
 * Variants:
 * - h1 = 60px
 * - h2 = 48px
 * - h3 = 36px
 * - h4 = 30px
 * - h5 = 24px
 * - h6 = 20px
 * - base = 16px
 * - sm = 14px
 * - xs = 12px
 * - md = 16px
 * - lg = 18px
 * - xl = 20px
 */
const Typography = createPolymorphicComponent<"p", TypographyProps>(
  forwardRef(TypographyCustomBasic),
);

export default Typography;
