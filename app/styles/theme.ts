import {
  Button,
  createTheme,
  DEFAULT_THEME,
  type DefaultMantineColor,
  type MantineColorsTuple,
  mergeMantineTheme,
  rem,
  Text,
} from "@mantine/core";

type ExtendedCustomColors = DefaultMantineColor | "primary" | "secondary";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

const amrutamTheme = createTheme({
  primaryShade: 5,
  colors: {
    primary: [
      "#DBE3DC",
      "#EAF2EA",
      "#9DB29D",
      "#C1F1C5",
      "#3A643B",
      "#2E522E",
      "#223A22",
      "#172817",
      "#0B110B",
      "#000000",
    ],
    secondary: [
      "#E9DFCA",
      "#EADFC3",
      "#FBEECC",
      "#F9E8B1",
      "#F4E0A7",
      "#F0D59A",
      "#E8C68D",
      "#E0B780",
      "#D8A872",
      "#D09B63",
    ],
  },
  primaryColor: "primary",
  fontFamily: "Poppins, sans-serif",
  headings: {
    fontFamily: "Poppins, sans-serif",
    sizes: {
      h1: {
        fontSize: rem(60),
      },
      h2: {
        fontSize: rem(48),
      },
      h3: {
        fontSize: rem(36),
      },
      h4: {
        fontSize: rem(30),
      },
      h5: {
        fontSize: rem(24),
      },
      h6: {
        fontSize: rem(20),
      },
    },
  },
  fontSizes: {
    base: rem(8),
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: "filled",
        color: "primary",
        radius: "md",
        fz: "md",
        px: rem(16),
        py: rem(8),
      },
    }),
    Text: Text.extend({
      defaultProps: {
        fz: "md",
        lh:"xs"
      },
    }),
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, amrutamTheme);
