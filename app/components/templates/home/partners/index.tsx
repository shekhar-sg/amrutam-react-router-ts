import { motion } from "framer-motion";
import SectionWrapper from "~/components/atoms/section-wrapper";
import SharkTank from "./assets/shark-tank.png";
import GQ from "./assets/gq.png";
import BeWellbeing from "./assets/be-wellbeing.png";
import Forbes from "./assets/forbes.png";
import ChoiceOfFashion from "./assets/choice-of-fashion.png";
import DeccanHerald from "./assets/deccan-herald.png";
import HuffPost from "./assets/huffpost.png";
import LifestyleAsia from "./assets/lifestyle-asia.png";
import LivingEtc from "./assets/livingetc.png";
import YourStory from "./assets/your-story.png";
import Vogue from "./assets/vogue.png";
import Traveller from "./assets/traveller.png";
import TimesOfIndia from "./assets/times-of-india.png";

const images = [
  LifestyleAsia,
  BeWellbeing,
  Forbes,
  Traveller,
  DeccanHerald,
  SharkTank,
  HuffPost,
  TimesOfIndia,
  GQ,
  LivingEtc,
  YourStory,
  ChoiceOfFashion,
  Vogue,
];

const Partners = () => {
  return (
    <SectionWrapper
      WrapperProps={{ className: "overflow-hidden mb-18" }}
      className={"flex max-w-full items-center"}
    >
      <motion.div
        className="flex gap-10 lg:gap-14 xl:gap-16"
        initial={{ x: 0 }}
        animate={{ x: "-100%"}}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 10,
          repeatType: "reverse",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={"h-15 lg:h-20 xl:h-26 w-fit object-cover object-center"}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Partners;
