import {
  Button,
  createTheme,
  DEFAULT_THEME,
  type DefaultMantineColor,
  type MantineColorsTuple,
  mergeMantineTheme,
  rem,
} from "@mantine/core";

type ExtendedCustomColors = DefaultMantineColor | "primary" | "secondary";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }

  export interface MantineThemeOther {
    headerHeight: {
      base: string;
      lg: string;
    };
  }
}

const amrutamTheme = createTheme({
  primaryShade: 5,
  other: {
    headerHeight: {
      base: "74px",
      lg: "148px",
    },
  },
  breakpoints: {
    xs: "512px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
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
      "#fff9eb",
      "#fdf2d5",
      "#fde4a4",
      "#fdd56f",
      "#fdc846",
      "#fdc02f",
      "#fdbc25",
      "#e1a51b",
      "#c89212",
      "#ad7e00",
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
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, amrutamTheme);
