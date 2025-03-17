import { Group, ThemeIcon, useMantineTheme } from "@mantine/core";
import { motion, useScroll } from "framer-motion";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { LuPhone } from "react-icons/lu";
import AmrutamLogo from "~/components/atoms/amrutam-logo";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import RouteChangeProgressBar from "~/components/molecules/route-change-progress-bar";
import NavigationSection from "~/components/organisms/header/navigation-section";

const Header = () => {
  const theme = useMantineTheme();
  return (
    <SectionWrapper
      component={AnimatedNavbar}
      WrapperProps={{
        className: `shadow-md h-fit`,
      }}
      h={theme.other.headerHeight}
      px={40}
      pos={"relative"}
    >
      <Group
        h={"50%"}
        justify={"center"}
        className={"w-fit lg:w-full"}
        visibleFrom={"lg"}
      >
        <Group gap={6} pos={"absolute"} left={40}>
          <ThemeIcon variant={"transparent"}>
            <LuPhone className={"text-lg"} />
          </ThemeIcon>
          <Typography c={"primary.5"}>+91 9826352321</Typography>
        </Group>
        <AmrutamLogo />
      </Group>
      <NavigationSection
        h={{
          base: "100%",
          lg: "50%",
        }}
      />
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
