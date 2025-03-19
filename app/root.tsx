import "@fontsource-variable/dm-sans";
import { useEffect } from "react";
import { Outlet } from "react-router";
import StoreProvider from "~/store/Provider";
import GlobalErrorBoundary from "~/components/pages/global-error-boundary";
import GlobalLayout from "~/components/pages/global-layout";

// import 'tailwindcss/index.css'

export function links() {
  return [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/png",
    },
  ];
}

export const ErrorBoundary = GlobalErrorBoundary;

export const Layout = GlobalLayout;

export default function App() {
  useEffect(() => {
    import("tailwindcss/index.css");
    import('@mantine/core/styles.css')
    import("@fontsource-variable/dm-sans/wght.css");
  }, []);

  return (
    <StoreProvider>
      <Outlet />
    </StoreProvider>
  );
}
