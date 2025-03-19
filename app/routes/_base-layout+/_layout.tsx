import { AppShell, useMantineTheme } from "@mantine/core";
import DownloadApp from "app/components/organisms/download-app";
import Footer from "app/components/organisms/footer";
import { type PropsWithChildren } from "react";
import { isRouteErrorResponse, Outlet, useRouteError } from "react-router";
import MobileNavigation from "~/components/organisms/footer/mobile-navigation";
import Header from "~/components/organisms/header";
import { useAppSelector } from "~/store/hooks";

const AppShellWrap = ({ children }: PropsWithChildren) => {
  const isSideNavOpen = useAppSelector(
    ({ appConfig }) => appConfig.isSideNavOpen,
  );
  const theme = useMantineTheme();

  return (
    <AppShell
      header={{
        height: theme.other.headerHeight,
        offset: false,
      }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !isSideNavOpen },
      }}
    >
      {children}
    </AppShell>
  );
};

const Layout = () => {
  return (
    <AppShellWrap>
      <Header />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Section>
        <DownloadApp />
      </AppShell.Section>
      <Footer />
      <AppShell.Footer
        component={"nav"}
        hiddenFrom={"lg"}
        className={"overflow-hidden rounded-t-[50px]"}
      >
        <MobileNavigation />
      </AppShell.Footer>
    </AppShellWrap>
  );
};

export default Layout;

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
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
}
