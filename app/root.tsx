// import '@fontsource-variable/dm-sans';
import { Outlet } from "react-router";
import "./styles/global.css";
import StoreProvider from "~/store/Provider";
import GlobalErrorBoundary from "~/components/pages/global-error-boundary";
import GlobalLayout from "~/components/pages/global-layout";

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
  return (
    <StoreProvider>
      <Outlet />
    </StoreProvider>
  );
}
