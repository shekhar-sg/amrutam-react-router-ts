import {
  createPolymorphicComponent,
  Text,
  type TextProps,
} from "@mantine/core";
import clsx from "clsx";
import { forwardRef } from "react";

const TypographyResponsive = {
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
    base: "base",
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
    md: "base",
    lg: "lg",
  },
  "body-small": {
    base: "xs",
    md: "sm",
    lg: "base",
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
} & TextProps;

const TypographyCustom = forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => {
    const { fontVariant = "body", className, ...rest } = props;

    return (
      <Text
        ref={ref}
        fz={TypographyResponsive[fontVariant]}
        className={clsx(fontVariant, className)}
        {...rest}
      />
    );
  },
);
TypographyCustom.displayName = "Typography";

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
  TypographyCustom,
);

export default Typography;
