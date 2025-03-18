import { ActionIcon, Button, Flex } from "@mantine/core";
import { type ComponentType } from "react";
import { BsBell } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { GiLindenLeaf } from "react-icons/gi";
import { TbHomeHeart, TbRibbonHealth } from "react-icons/tb";
import { NavLink } from "react-router";

const data: {
  label: string;
  Icon: ComponentType;
  href: string;
}[] = [
  {
    label: "Home",
    href: "/",
    Icon: TbHomeHeart,
  },
  {
    label: "Shop",
    href: "/shop",
    Icon: CiShop,
  },
  {
    label: "Consult",
    href: "/find-doctor",
    Icon: TbRibbonHealth,
  },
  {
    label: "Forum",
    href: "/forum",
    Icon: GiLindenLeaf,
  },
  {
    label: "Bulletin",
    href: "/bulletin",
    Icon: BsBell,
  },
];

const MobileNavigation = () => {
  return (
    <Flex
      bg={"primary"}
      h={"fit-content"}
      px={10}
      py={16}
      justify={"space-evenly"}
    >
      {data.map((item) => {
        const { label, href, Icon } = item;
        return (
          <Button
            key={label}
            component={NavLink}
            c={"primary.2"}
            to={href}
            h={58}
            w={58}
            fz={10}
            fw={400}
            className={
              "!p-0 !pb-1 hover:!rounded-[20px] [&.active]:!rounded-[20px] [&.active]:!bg-green-100/20 [&.active]:!text-white [&.pending]:!bg-green-100/10"
            }
            classNames={{
              label: "flex flex-col justify-evenly",
            }}
          >
            <ActionIcon c={"inherit"} variant={"transparent"} fz={"xl"}>
              <Icon />
            </ActionIcon>
            {label}
          </Button>
        );
      })}
    </Flex>
  );
};

export default MobileNavigation;
