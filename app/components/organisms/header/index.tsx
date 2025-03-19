import { Group, ThemeIcon } from "@mantine/core";
// import { motion, useScroll } from "framer-motion";
// import { type PropsWithChildren, useEffect, useState } from "react";
import { LuPhone } from "react-icons/lu";
import AmrutamLogo from "~/components/atoms/amrutam-logo";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import RouteChangeProgressBar from "~/components/molecules/route-change-progress-bar";
import NavigationSection from "~/components/organisms/header/navigation-section";

const Header = () => {
  return (
    // <AnimateHeader>
    <SectionWrapper
      WrapperProps={{
        className: `shadow-md h-full`,
      }}
      className={"h-full"}
      pos={"relative"}
    >
      <Group h={"50%"} justify={"center"} visibleFrom={"lg"} pos={"relative"}>
        <Group gap={6} pos={"absolute"} left={0}>
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
    // </AnimateHeader>
  );
};

export default Header;

// const AppShellHeader = motion.create(AppShell.Header);

// const AnimateHeader = ({ children }: PropsWithChildren) => {
//   const { scrollY } = useScroll({
//     axis: "y",
//   });
//   const [isScrolled, setIsScrolled] = useState(false);
//
//   useEffect(() => {
//     let currentY = scrollY.get();
//     scrollY.on("change", (latest) => {
//       if (latest > currentY && latest > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//       currentY = latest;
//     });
//   }, [scrollY]);
//   return (
//     <AppShellHeader
//       pos={"sticky"}
//       animate={{
//         y: !isScrolled ? 0 : -100,
//         opacity: !isScrolled ? 1 : 0,
//         transition: {
//           duration: 0.4,
//           ease: "easeInOut",
//         },
//       }}
//     >
//       {children}
//     </AppShellHeader>
//   );
// };
