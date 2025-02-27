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
      <Banner features={features} className={"h-fit"} />
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
