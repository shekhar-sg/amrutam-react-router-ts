import { Outlet } from "react-router";
import GlobalErrorBoundary from "~/components/pages/global-error-boundary";
import GlobalLayout from "~/components/pages/global-layout";
import StoreProvider from "~/store/Provider";
import "./styles/global.css";

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
