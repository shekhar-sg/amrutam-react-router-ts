import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";
import type { Route } from "./+types/root";
import { type PropsWithChildren, useEffect, useState } from "react";
import "./styles/global.css";
import StoreProvider from "~/store/Provider";
import { doubleSlashRemover } from "~/utils/request";

export function links() {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
  ];
}

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Amrutam</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Outlet />
    </StoreProvider>
  );
}

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      const pathName = error.data.split(" ").at(-1) ?? "";
      if (pathName) {
        const finalPath = String(pathName).replaceAll('"', "");
        const { doubleSlashCount, url } = doubleSlashRemover(finalPath);
        if (doubleSlashCount > 0) {
          navigate(url, { replace: true });
        }
      }
    }
    setIsMounted(true);
  }, [error, navigate]);
  if (!isMounted) {
    return null;
  }
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};
