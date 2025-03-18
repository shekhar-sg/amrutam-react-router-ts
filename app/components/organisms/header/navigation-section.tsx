import {
  Anchor,
  Box,
  Burger,
  Button,
  Group,
  type GroupProps,
  Indicator,
  ThemeIcon,
} from "@mantine/core";
import clsx from "clsx";
import { useCallback } from "react";
import { BsBell, BsCart2 } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import AmrutamLogo from "~/components/atoms/amrutam-logo";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { toggleSideNav } from "~/store/slices/appConfig";

const tabs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Find Doctors",
    link: "/find-doctors",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Forum",
    link: "/forum",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
];

const NavLinks = (props: GroupProps) => {
  const isSideNavOpen = useAppSelector(
    ({ appConfig }) => appConfig.isSideNavOpen,
  );
  const dispatch = useAppDispatch();
  const toggle = useCallback(() => {
    dispatch(toggleSideNav());
  }, [dispatch]);
  return (
    <>
      <Burger
        opened={isSideNavOpen}
        onClick={toggle}
        hiddenFrom="lg"
        size="sm"
      />
      <Group gap={40} {...props} visibleFrom={"lg"}>
        {tabs.map((tab) => (
          <Anchor key={tab.name} component={NavLink} to={tab.link} fz={"xl"}>
            {tab.name}
          </Anchor>
        ))}
      </Group>
    </>
  );
};

const rightSide = [
  {
    name: "Cart",
    link: "/cart",
    icon: BsCart2,
  },
  {
    name: "wallet",
    link: "/wallet",
    icon: IoWalletOutline,
  },
  {
    name: "notifications",
    link: "/notifications",
    icon: BsBell,
  },
];

const ProfileRelatedLinks = (props: GroupProps) => {
  return (
    <Group gap={16}{...props}>
      {rightSide.map((item) => {
        const { icon: Icon, link } = item;
        return (
          <Anchor aria-label={item.name} component={Link} to={link} key={item.name} visibleFrom={'sm'} >
            <Indicator label={13} size={22}>
              <ThemeIcon variant={"transparent"} size={36} fz={"h5"}>
                <Icon />
              </ThemeIcon>
            </Indicator>
          </Anchor>
        );
      })}
      <Button aria-label={'login'} component={Link} to={"/login"} radius={"xl"} ml={"xs"}>
        Login
      </Button>
    </Group>
  );
};

const NavigationSection = (props: GroupProps) => {
  return (
    <Box
      {...props}
      className={clsx(
        "relative flex items-center justify-between xl:justify-center",
        props.className,
      )}
    >
      <NavLinks />
      <AmrutamLogo hiddenFrom={"lg"} />
      <ProfileRelatedLinks className={"xl:absolute xl:right-0"} />
    </Box>
  );
};

export default NavigationSection;
