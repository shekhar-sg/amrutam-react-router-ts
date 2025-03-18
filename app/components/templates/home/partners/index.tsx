import { Image } from "@mantine/core";
import { motion } from "framer-motion";
import SectionWrapper from "~/components/atoms/section-wrapper";
import BeWellbeing from "./assets/be-wellbeing.webp";
import DeccanHerald from "./assets/deccan-herald.webp";
import Forbes from "./assets/forbes.webp";
import GQ from "./assets/gq.webp";
import HuffPost from "./assets/huffpost.webp";
import LifestyleAsia from "./assets/lifestyle-asia.webp";
import LivingEtc from "./assets/livingetc.webp";
import SharkTank from "./assets/shark-tank.webp";
import TimesOfIndia from "./assets/times-of-india.webp";
import Traveller from "./assets/traveller.webp";
import Vogue from "./assets/vogue.webp";
import YourStory from "./assets/your-story.webp";

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
      className={"relative flex max-w-full items-center"}
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap lg:gap-14 xl:gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 20,
          repeatType: "reverse",
        }}
      >
        {[...images].map((src, index) => (
          <Image
            loading={'eager'}
            key={index}
            src={src}
            alt={`slide-${index}`}
            h={{ base: 60, lg: 80, xl: 104 }}
            w={"fit-content"}
            className={"object-cover object-center"}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Partners;
