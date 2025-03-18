import { BsShieldCheck } from "react-icons/bs";
import { FaPhone, FaUserDoctor } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import HeroStats from "~/components/templates/home/hero-section/hero-stats";
import Banner from "./banner";

const HeroSection = () => {
  return (
    <SectionWrapper
      className={"relative flex py-28 md:pb-34 lg:py-28"}
      WrapperProps={{
        className: "hero-background relative mb-25",
      }}
    >
      <div className={"w-full space-y-4 md:w-[60%]"}>
        <h6 className={"body-small text-stone-500"}>
          Namaste, Welcome to Amrutam{" "}
        </h6>
        <h2 className={"heading-large leading-[140%] font-bold"}>
          Struggling with Lifestyle Disorders?
          <br /> Get Expert Ayurvedic Help Today.
        </h2>
        <p className={"heading-xsmall text-stone-700"}>
          Speak to Certified & Trusted Ayurvedic Doctors for personalized care.
        </p>
        <Link
          to={"/"}
          className={
            "btn heading-xsmall flex w-[65%] max-w-137.25 items-center justify-center gap-2.5 rounded-2xl py-4 font-bold md:w-[85%] md:py-5.5"
          }
        >
          <FaPhone />
          Instant Call for FREE
        </Link>
        <HeroStats />
      </div>
      <div></div>
      <Banner
        features={features}
        className={
          "absolute bottom-0 h-fit max-w-[calc(100%_-_32px)] translate-y-9/10 md:translate-y-3/5 lg:max-w-[calc(100%_-_48px)] xl:max-w-[calc(100%_-_200px)]"
        }
      />
    </SectionWrapper>
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
