import { Box, Button, Image } from "@mantine/core";
import { BsShieldCheck } from "react-icons/bs";
import { FaPhone, FaUserDoctor } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography, {
  TypographyResponsive,
} from "~/components/atoms/typography";
import HeroStats from "~/components/templates/home/hero-section/hero-stats";

import backgroundSvg from "./assets/curve-header.svg";
import Banner from "./banner";

const HeroSection = () => {
  return (
    <Box className={"relative"}>
      <Image className={"absolute inset-0"} src={backgroundSvg} />
      <SectionWrapper
        className={"relative flex py-14 md:py-28 md:pb-34"}
        WrapperProps={{
          className: `mb-110 md:mb-60 xl:mb-40 bg-gradient-to-t to-[#ffffff3a] from-[#b08e3633]`,
        }}
      >
        <Box className={"w-full space-y-4 md:w-[60%]"}>
          <Typography fontVariant={"body-small"} fw={500} c={"dark.3"}>
            Namaste, Welcome to Amrutam{" "}
          </Typography>
          <Typography
            fontVariant={"heading-xlarge"}
            fz={{
              ...TypographyResponsive["heading-xlarge"],
              xl: "h3",
            }}
            c={"dark.9"}
          >
            Struggling with Lifestyle Disorders?
            <br /> Get Expert Ayurvedic Help Today.
          </Typography>
          <Typography fontVariant={"heading-xsmall"} c={"dark.4"}>
            Speak to Certified & Trusted Ayurvedic Doctors for personalized
            care.
          </Typography>
          <Button
            component={Link}
            to={"/"}
            size={"xl"}
            fullWidth
            w={{ sm: "80%" }}
            radius={"lg"}
            fw={700}
            classNames={{
              label: "gap-x-4",
            }}
          >
            <FaPhone />
            Instant Call for FREE
          </Button>
          <HeroStats />
        </Box>
        <div></div>
        <Banner
          features={features}
          className={
            "absolute bottom-0 h-fit max-w-[calc(100%_-_32px)] translate-y-9/10 md:translate-y-3/5 lg:max-w-[calc(100%_-_48px)] xl:max-w-[calc(100%_-_200px)]"
          }
        />
      </SectionWrapper>
    </Box>
  );
};

export default HeroSection;

const features = [
  {
    icon: IoChatbubblesOutline,
    about: "Convenient online & In-clinic consultations",
  },
  {
    icon: BsShieldCheck,
    about: "Safe and effective treatment",
  },
  {
    icon: FaUserDoctor,
    about: "Experienced Ayurvedic Practitioners",
  },
  {
    icon: MdEditDocument,
    about: "Personalized Treatment Plans & Guidance",
  },
];
