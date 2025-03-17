import { Flex, Image, Stack, ThemeIcon } from "@mantine/core";
import { motion, useScroll } from "framer-motion";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import RouteChangeProgressBar from "~/components/molecules/route-change-progress-bar";
import Amrutam from "./assets/amrutam.png";

const Header = () => {
  return (
    <SectionWrapper
      component={AnimatedNavbar}
      WrapperProps={{
        className: `bg-primary-50 shadow-md h-fit`,
      }}
      className={"flex max-w-full items-center justify-between !px-10 py-4"}
    >
      <Flex gap={6} mb={"auto"} mt={16} visibleFrom={"sm"}>
        <ThemeIcon variant={"transparent"}>
          <LuPhone className={"text-lg"} />
        </ThemeIcon>
        <Typography c={"primary.5"}>+91 9826352321</Typography>
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
        </Stack>
      </Stack>
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
