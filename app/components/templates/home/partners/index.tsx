import { motion } from "framer-motion";
import SectionWrapper from "~/components/atoms/section-wrapper";
import SharkTank from "./assets/shark-tank.webp";
import GQ from "./assets/gq.webp";
import BeWellbeing from "./assets/be-wellbeing.webp";
import Forbes from "./assets/forbes.webp";
import DeccanHerald from "./assets/deccan-herald.webp";
import HuffPost from "./assets/huffpost.webp";
import LifestyleAsia from "./assets/lifestyle-asia.webp";
import LivingEtc from "./assets/livingetc.webp";
import YourStory from "./assets/your-story.webp";
import Vogue from "./assets/vogue.webp";
import Traveller from "./assets/traveller.webp";
import TimesOfIndia from "./assets/times-of-india.webp";

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
