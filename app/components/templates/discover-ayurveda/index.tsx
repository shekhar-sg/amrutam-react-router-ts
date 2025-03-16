import DiscoverSectionData from "~/components/templates/discover-ayurveda/constants";
import YogaCards from "~/components/templates/discover-ayurveda/yoga-cards";
import SectionWrapper from "~/components/atoms/section-wrapper";
import clsx from "clsx";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const { heading, chakra, meditation, description, cards } = DiscoverSectionData;

const DiscoverAyurveda = () => {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const { scrollYProgress } = useScroll({
    target: ref,
    axis: "y",
    offset: ["start start", "end end"],
  });

  const chakraOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.6],
    [0, 0.4, 1],
  );
  const chakraScale = useTransform(scrollYProgress, [0.1, 0.6], [20, 1]);
  const chakraYPosition = useTransform(
    scrollYProgress,
    [0.55, 0.8],
    ["-100%", "0%"],
  );

  const yogaCardScale = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const yogaCardOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const yogaCardLeftXPosition = useTransform(
    scrollYProgress,
    [0.6, 0.9],
    ["100%", "0%"],
  );
  const yogaCardRightXPosition = useTransform(
    scrollYProgress,
    [0.6, 0.9],
    ["-100%", "0%"],
  );

  const yogaCardMobileYPosition = useTransform(
    scrollYProgress,
    [0.6, 0.9],
    ["-100%", "0%"],
  );

  return (
    <SectionWrapper
      ref={ref}
      WrapperProps={{
        className: `pt-30 calc-height-200`,
      }}
      className={`calc-height-100 sticky top-[var(--header-height)] mt-54 flex min-h-fit flex-col items-center gap-5 md:mt-10`}
    >
      <div
        className={
          "flex flex-col items-center justify-center gap-5 text-center"
        }
      >
        <h2
          className={"text-primary-main border-b-8 px-6 leading-15 font-bold"}
        >
          {heading}
        </h2>
        <p className={"max-w-2xl"}>{description}</p>
      </div>
      <div
        className={
          "flex h-full flex-col items-center justify-center gap-y-10 lg:flex-row xl:gap-5"
        }
      >
        <div className={"hidden flex-1 flex-col items-end gap-15 lg:flex"}>
          {cards.slice(0, 3).map((card, index) => {
            return (
              <YogaCards
                key={card.title}
                image={card.icon}
                title={card.title}
                description={card.description}
                className={clsx(
                  "text-right lg:flex-row-reverse",
                  index % 2 && "mr-8",
                )}
                style={{
                  x: yogaCardLeftXPosition,
                  scale: yogaCardScale,
                  opacity: yogaCardOpacity,
                }}
              />
            );
          })}
        </div>
        <div
          className={
            "relative max-h-[50vw] w-[50vw] flex-1 lg:h-auto lg:w-auto"
          }
        >
          <motion.img
            src={chakra}
            alt={"yoga"}
            whileInView={{
              rotate: 360,
              transition: {
                duration: 100,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              opacity: chakraOpacity,
              scale: chakraScale,
              y: chakraYPosition,
            }}
          />
          <img
            src={meditation}
            alt={"yoga"}
            className={"absolute -bottom-1/6 -left-2"}
          />
        </div>
        <div
          className={
            "flex flex-row flex-wrap justify-center gap-5 lg:flex-1 lg:flex-col lg:gap-15"
          }
        >
          {cards.map((card, index) => {
            return (
              <YogaCards
                key={card.title}
                image={card.icon}
                title={card.title}
                description={card.description}
                className={clsx(
                  "!w-[calc((100%-20px)/2)] flex-col text-center lg:!w-full lg:flex-row lg:text-start",
                  {
                    "lg:hidden": index < 3,
                    "lg:ml-8": !(index % 2),
                  },
                )}
                style={{
                  y: isMobile ? yogaCardMobileYPosition : 0,
                  x: isMobile ? 0 : yogaCardRightXPosition,
                  scale: yogaCardScale,
                  opacity: yogaCardOpacity,
                }}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DiscoverAyurveda;
