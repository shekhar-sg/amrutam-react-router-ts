import SectionWrapper from "~/components/atoms/section-wrapper";
import { IoChatbubblesOutline, IoDocumentTextOutline } from "react-icons/io5";
import { PiWatchLight } from "react-icons/pi";
import { BiBell } from "react-icons/bi";
import googlePlayStore from "./assets/google-play-store.png";
import appleStore from "./assets/apple-store.png";
import mobileAppXs from "./assets/mobile-app-sm.png";
import mobileAppMd from "./assets/mobile-app-md.png";
import { Link } from "react-router";

const DownloadApp = () => {
  return (
    <SectionWrapper className={"flex mb-24"}>
      <div
        className={
          "flex w-full flex-col items-center space-y-5 text-center lg:w-[45%] lg:items-start lg:text-start"
        }
      >
        <h1 className={"heading-large text-primary-main font-bold"}>
          Download Amrutam Ayurveda App Now
        </h1>
        <p className={"heading-xsmall mb-11 w-[60%] text-stone-600 lg:w-[80%]"}>
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda!
          Apart from mimicking the website, the app has added benefits
        </p>
        <div
          className={
            "mb-0 grid w-fit grid-cols-2 gap-x-4 gap-y-4.25 sm:gap-x-8.5 lg:mb-14.5"
          }
        >
          {features.map((feature, index) => {
            const { Icon, label } = feature;
            return (
              <div
                key={index}
                className={
                  "text-primary-main flex w-full max-w-55 items-center justify-center gap-3 rounded-2xl border border-stone-200 px-3 py-4.75 text-start"
                }
              >
                <div
                  className={
                    "flex aspect-square size-10 rounded-full border p-1.5"
                  }
                >
                  <Icon className={"size-full"} />
                </div>
                <span className={"body-small capitalize"}>{label}</span>
              </div>
            );
          })}
        </div>
        <img
          src={image.xs}
          alt={"Amrutam home App"}
          className={
            "block h-[80vw] w-full object-contain object-center md:h-fit lg:hidden"
          }
        />
        <div
          className={"flex flex-col items-center gap-x-4 gap-y-7 sm:flex-row"}
        >
          {mobileAppLink.map((app, index) => {
            return (
              <Link key={index} to={app.href} className={"flex w-fit"}>
                <img src={app.image} alt={app.title} />
              </Link>
            );
          })}
        </div>
      </div>
      <img
        src={image.md}
        alt={"Amrutam home App"}
        className={
          "hidden w-[55%] object-contain object-center lg:inline-block"
        }
      />
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

const image = {
  xs: mobileAppXs,
  md: mobileAppMd,
};
