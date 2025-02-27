import { type ComponentPropsWithoutRef, type ElementType } from "react";
import clsx from "clsx";

export type TypographyVariant =
  | "heading-xxlarge"
  | "heading-xlarge"
  | "heading-large"
  | "heading-medium"
  | "heading-small"
  | "heading-xsmall"
  | "body"
  | "body-small"
  | "body-xsmall";

export type TypographyProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> & {
    as?: T;
    variant?: TypographyVariant;
  };

const Typography = <T extends ElementType = "p">(props: TypographyProps<T>) => {
  const { as: Wrapper = "p", variant = "body", className, ...rest } = props;

  return <Wrapper className={clsx(variant, className)} {...rest} />;
};

export default Typography;
