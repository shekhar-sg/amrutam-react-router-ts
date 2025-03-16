import DiscoverSectionData from "~/components/templates/discover-ayurveda/constants";
import YogaCards from "~/components/templates/discover-ayurveda/yoga-cards";
import SectionWrapper from "~/components/atoms/section-wrapper";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const { heading, chakra, meditation, description, cards } = DiscoverSectionData;

const DiscoverAyurveda = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  useEffect(() => {
    setIsMobileView(isMobile);
  }, [isMobile]);
  const { scrollYProgress } = useScroll({
    target: ref,
    axis: "y",
    offset: ["start start", "end end"],
  });

  const headingMarginTop = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["60%", "0%"],
  );

  const chakraOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.55, 0.6],
    [0, 0.4, 1],
  );
  const chakraScale = useTransform(scrollYProgress, [0.1, 0.6], [20, 1]);
  const chakraYPosition = useTransform(
    scrollYProgress,
    [0.55, 0.7],
    [isMobileView ? "-10%" : "-100%", "0%"],
  );

  const meditationBoxPositionY = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    ["10%", "0%"],
  );

  const yogaCardScale = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const yogaCardOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.8, 0.9],
    [0, 0, 1],
  );
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
    <div ref={ref} className={"h-[400vh]"}>
      <SectionWrapper
        WrapperProps={{
          className:
            "lg:h-screen sticky top-0 overflow-hidden pt-[var(--header-height)]",
        }}
        className={"flex h-full flex-col items-center gap-5"}
      >
        <motion.div
          className={
            "flex flex-col items-center justify-center gap-5 text-center sm:!mt-0"
          }
          style={{
            marginTop: headingMarginTop,
          }}
        >
          <h2
            className={
              "text-primary-main border-primary-100/20 border-b-8 px-6 font-bold"
            }
          >
            {heading}
          </h2>
          <p className={"max-w-2xl"}>{description}</p>
        </motion.div>
        <div
          className={
            "flex h-full flex-col items-center justify-center gap-y-10 lg:flex-row xl:gap-5"
          }
        >
          <div
            className={
              "hidden flex-1 flex-col items-end gap-5 lg:flex xl:gap-15"
            }
          >
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
          <motion.div
            className={
              "relative max-h-[50vw] w-[50vw] flex-1 lg:h-auto lg:w-auto"
            }
            style={{
              y: meditationBoxPositionY,
            }}
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
          </motion.div>
          <div
            className={
              "flex flex-row flex-wrap justify-center gap-5 lg:flex-1 lg:flex-col xl:gap-15"
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
                    y: isMobileView ? yogaCardMobileYPosition : 0,
                    x: isMobileView ? 0 : yogaCardRightXPosition,
                    scale: yogaCardScale,
                    opacity: yogaCardOpacity,
                  }}
                />
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default DiscoverAyurveda;
