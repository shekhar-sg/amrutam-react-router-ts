import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import RouteChangeProgressBar from "~/components/molecules/route-change-progress-bar";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { motion, useScroll } from "framer-motion";
import { Box, Chip, Flex, Image, Indicator, Stack, ThemeIcon } from "@mantine/core";
import { LuPhone } from "react-icons/lu";
import Typography from "~/components/atoms/typography";
import { BsBell, BsCart2, BsPersonCircle } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import Amrutam from "./assets/amrutam.png";
import { PiCaretDown } from "react-icons/pi";

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

const Header = () => {
  return (
    <SectionWrapper
      as={AnimatedNavbar}
      WrapperProps={{
        className: `bg-primary-50 shadow-md h-fit`,
      }}
      className={"flex max-w-full items-center justify-between !px-10 py-4"}
    >
      <Flex gap={6} mb={"auto"} mt={16} visibleFrom={"sm"}>
        <ThemeIcon variant={"transparent"}>
          <LuPhone className={"text-lg"} />
        </ThemeIcon>
        <Typography c={"primary.5"} component={Link} to={"/"}>
          +91 9826352321
        </Typography>
      </Flex>
      <Stack>
        <Stack align={"center"}>
          <Link
            to={"/"}
            className={
              "text-primary-main text-2xl font-bold tracking-wide uppercase"
            }
          >
            <Image src={Amrutam} w={208} />
          </Link>
          <Flex gap={40}>
            {tabs.map((tab) => (
              <Box
                component={Link}
                fz={"xl"}
                key={tab.name}
                to={tab.link}
                className={"capitalize"}
              >
                {tab.name}
              </Box>
            ))}
          </Flex>
        </Stack>
      </Stack>
      <Flex gap={12} mt={"auto"} align={"center"} justify={"center"}>
        {rightSide.map((item) => {
          const { icon: Icon, link } = item;
          return (
            <Link to={link} key={item.name}>
              <Indicator
                label={13}
                size={22}
              >
                <ThemeIcon variant={"transparent"} size={36}>
                  <Icon className={"size-6"} />
                </ThemeIcon>
              </Indicator>
            </Link>
          );
        })}
      </Flex>
      {/*<CartButton />*/}
      <RouteChangeProgressBar className={"!absolute top-auto bottom-0"} />
    </SectionWrapper>
  );
};

export default Header;

const AnimatedNavbar = ({
  children,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<typeof motion.header>>) => {
  const { scrollY } = useScroll({
    axis: "y",
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let currentY = scrollY.get();
    scrollY.on("change", (latest) => {
      if (latest > currentY && latest > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      currentY = latest;
    });
  }, [scrollY]);

  return (
    <motion.header
      {...rest}
      style={{
        ...rest.style,
      }}
      animate={{
        y: !isScrolled ? 0 : -100,
        opacity: !isScrolled ? 1 : 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.header>
  );
};
