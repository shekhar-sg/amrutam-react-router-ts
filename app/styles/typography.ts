import type { TextProps } from "@mantine/core";

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
