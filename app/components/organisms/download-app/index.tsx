import { ActionIcon, Flex, Grid, Image } from "@mantine/core";
import { BiBell } from "react-icons/bi";
import { IoChatbubblesOutline, IoDocumentTextOutline } from "react-icons/io5";
import { PiWatchLight } from "react-icons/pi";
import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import appleStore from "~/assets/apple-store.webp";
import googlePlayStore from "~/assets/google-play-store.webp";
import mobileApp from "./assets/mobile-app.webp";

const DownloadApp = () => {
  return (
    <SectionWrapper component={Grid} className={"mb-24 flex py-19"}>
      <Grid.Col
        span={{
          lg: 5.5,
        }}
        className={"flex-col items-center max-lg:flex max-lg:text-center"}
      >
        <Typography fontVariant={"heading-large"} mb={20}>
          Download Amrutam Ayurveda App Now
        </Typography>
        <Typography
          fontVariant={"heading-xsmall"}
          mb={44}
          c={"gray.7"}
          fw={"normal"}
        >
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda!
          Apart from mimicking the website, the app has added benefits
        </Typography>
        <Grid gutter={{ lg: 34 }} w={{ lg: "90%" }} mb={{ base: 20, lg: 60 }}>
          {features.map((feature, index) => {
            const { Icon, label } = feature;
            return (
              <Grid.Col key={index} span={6}>
                <Flex
                  w={"100%"}
                  h={"100%"}
                  px={12}
                  py={18}
                  ta={"start"}
                  c={"primary"}
                  align={"center"}
                  className={"gap-x-3 rounded-2xl border border-gray-300"}
                >
                  <ActionIcon variant={"outline"} p={6} radius={"xl"} size={40}>
                    <Icon className={"size-full"} />
                  </ActionIcon>
                  <Typography
                    fontVariant={"body-small"}
                    className={"capitalize"}
                  >
                    {label}
                  </Typography>
                </Flex>
              </Grid.Col>
            );
          })}
        </Grid>
        <Image
          loading={'lazy'}
          hiddenFrom={"lg"}
          src={mobileApp}
          alt={"Amrutam home App"}
          mb={80}
          w={"max(50%, 350px)"}
        />
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          align={"center"}
          rowGap={16}
          columnGap={28}
        >
          {mobileAppLink.map((app, index) => {
            return (
              <Link key={index} to={app.href} className={"flex w-fit"}>
                <Image unstyled loading={'lazy'} src={app.image} alt={app.title} />
              </Link>
            );
          })}
        </Flex>
      </Grid.Col>
      <Grid.Col
        ml={"auto"}
        my={"auto"}
        visibleFrom={"lg"}
        span={{
          lg: 5.5,
        }}
      >
        <Image src={mobileApp} loading={'lazy'} alt={"Amrutam home App"} />
      </Grid.Col>
    </SectionWrapper>
  );
};

export default DownloadApp;

const features = [
  { Icon: IoDocumentTextOutline, label: "Access to Prescriptions" },
  { Icon: PiWatchLight, label: "Track health efficiently" },
  { Icon: IoChatbubblesOutline, label: "Direct Chat with Doctors" },
  { Icon: BiBell, label: "In-app reminders for consultations" },
];

const mobileAppLink = [
  {
    title: "Google Play",
    image: googlePlayStore,
    href: "#",
  },
  {
    title: "Apple Store",
    image: appleStore,
    href: "#",
  },
];
