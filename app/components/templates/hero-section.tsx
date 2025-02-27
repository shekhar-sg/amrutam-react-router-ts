import SectionWrapper from "~/components/atoms/section-wrapper";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <div></div>
      <div></div>
      <Banner />
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

const Banner = () => {
  return (
    <div className={"flex items-center shadow"}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className={
              "text-primary-main flex items-center gap-4 border-r-amber-300"
            }
          >
            <div className={"flex aspect-square rounded-full border p-3"}>
              <Icon className={"size-10"} />
            </div>
            <p>{feature.about}</p>
          </div>
        );
      })}
    </div>
  );
};
