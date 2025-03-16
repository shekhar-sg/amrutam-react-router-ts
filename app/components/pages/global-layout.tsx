import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import type { PropsWithChildren } from "react";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import "@mantine/core/styles.css";
import { theme } from "~/styles/theme";

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Amrutam</title>
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider theme={theme} classNamesPrefix={"amrutam"}>
          {children}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default GlobalLayout;
