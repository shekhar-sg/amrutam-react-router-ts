import { Box, Flex, Group, Indicator, ThemeIcon } from "@mantine/core";
import { BsBell, BsCart2 } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { Link } from "react-router";

const tabs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Find doctors",
    link: "/find-doctors",
  },
  {
    name: "Store",
    link: "/store",
  },
  {
    name: "About us",
    link: "/about-us",
  },
];

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

const NavigationSection = () => {
  return (
    <Flex>
      <Group gap={40}>
        {tabs.map((tab) => (
          <Box
            key={tab.name}
            component={Link}
            fz={"xl"}
            to={tab.link}
            className={"capitalize"}
          >
            {tab.name}
          </Box>
        ))}
      </Group>
      <Group gap={12} mt={"auto"} align={"center"} justify={"center"}>
        {rightSide.map((item) => {
          const { icon: Icon, link } = item;
          return (
            <Link to={link} key={item.name}>
              <Indicator label={13} size={22}>
                <ThemeIcon variant={"transparent"} size={36}>
                  <Icon className={"size-6"} />
                </ThemeIcon>
              </Indicator>
            </Link>
          );
        })}
      </Group>
    </Flex>
  );
};

export default NavigationSection;
