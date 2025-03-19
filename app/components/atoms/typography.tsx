import {
  createPolymorphicComponent,
  Text,
  type TextProps,
} from "@mantine/core";
import clsx from "clsx";
import { forwardRef, type Ref } from "react";
import { TypographyResponsive, type TypographyVariant } from "~/styles/typography";

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
