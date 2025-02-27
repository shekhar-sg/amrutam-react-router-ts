import SectionWrapper from "~/components/atoms/section-wrapper";
import Banner from "./banner";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";

const HeroSection = () => {
  return (
    <SectionWrapper
      className={"relative flex h-100"}
      WrapperProps={{
        className: "bg-yellow-100",
      }}
    >
      <div></div>
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
