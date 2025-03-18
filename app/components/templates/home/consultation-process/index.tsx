import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import onboarding from "./assets/onboarding.png";
import chooseDoctor from "./assets/choose-doctor.png";
import bookConsultation from "./assets/book-consultation.png";
import getPrescription from "./assets/prescription.png";
import followUp from "./assets/follow-up.png";
import {
  motion,
  type MotionStyle,
  type MotionValue,
  type TargetAndTransition,
  useScroll,
  useTransform,
  type VariantLabels,
} from "framer-motion";
import Chip from "~/components/atoms/chip";
import { useMemo, useRef } from "react";

const ConsultationProcess = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className={"h-[400vh]"}>
      <SectionWrapper
        WrapperProps={{
          className: "h-screen sticky top-0 overflow-hidden pt-20",
        }}
        className={"h-full"}
      >
        <Typography
          fontVariant={"heading-xlarge"}
          underline
          className={
            "text-primary-main border-primary-100/20 mx-auto w-fit border-b-8 px-6 leading-15 font-bold"
          }
        >
          Consultation Process
        </Typography>
        <motion.div className={"relative flex h-full w-full"}>
          {process.map((step, index) => {
            return (
              <AnimatedCard
                key={step.title}
                data={step}
                position={index + 1}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default ConsultationProcess;

const initial: Record<number, TargetAndTransition | VariantLabels> = {
  1: {
    opacity: 0,
  },
  2: {
    opacity: 0,
  },
  3: {
    opacity: 0,
  },
  4: {
    opacity: 0,
  },
  5: {
    opacity: 0,
  },
};

const AnimatedCard = (props: {
  data: {
    title: string;
    time: string;
    description: string;
    icon: string;
  };
  position: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const { data, position, scrollYProgress } = props;
  const { title, time, icon, description } = data;

  const card1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const card2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    [0, 1, 0],
  );
  const card3Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0, 1, 0],
  );
  const card4Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8],
    [0, 1, 0],
  );
  const card5Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  const styles = useMemo<Record<number, MotionStyle>>(() => {
    return {
      1: {
        opacity: card1Opacity,
      },
      2: {
        opacity: card2Opacity,
      },
      3: {
        opacity: card3Opacity,
      },
      4: {
        opacity: card4Opacity,
      },
      5: {
        opacity: card5Opacity,
      },
    };
  }, [card1Opacity, card2Opacity, card3Opacity, card4Opacity, card5Opacity]);

  return (
    <motion.div
      initial={initial[position]}
      style={styles[position]}
      className={
        "absolute flex h-full w-full flex-col items-center justify-center gap-y-3 text-center"
      }
    >
      <div
        className={
          "heading-large flex items-center gap-3 text-center font-semibold capitalize"
        }
      >
        {position}. {title}
        <Chip
          as={"span"}
          label={time}
          className={
            "bg-primary-200 md:body-xsmall rounded-lg text-[8px] font-bold whitespace-nowrap"
          }
        />
      </div>
      <img src={icon} alt={title} className={"w-1/2"} />
      <p className={"text-base"}>{description}</p>
    </motion.div>
  );
};

const process = [
  {
    title: "Onboarding",
    time: "2 mins",
    description: "Register yourself in Amrutam.global",
    icon: onboarding,
  },
  {
    title: "Choose your doctor",
    time: "3 mins",
    description: "Select the doctor who's just right for you.",
    icon: chooseDoctor,
  },
  {
    title: "book a consultation",
    time: "1 mins",
    description: "Call the doctor “instantly” to find the health solution",
    icon: bookConsultation,
  },
  {
    title: "Get a personalized prescription",
    time: "2 mins",
    description: "Get a prescription catered to you by the specialized doctor",
    icon: getPrescription,
  },
  {
    title: "Regular follow-ups",
    time: "2 mins",
    description:
      "Stay on track with consistent support until you’re fully healed",
    icon: followUp,
  },
];
