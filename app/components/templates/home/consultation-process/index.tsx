import { Badge, Image } from "@mantine/core";
import {
  motion,
  type MotionStyle,
  type MotionValue,
  type TargetAndTransition,
  useScroll,
  useTransform,
  type VariantLabels,
} from "framer-motion";
import { useMemo, useRef } from "react";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import bookConsultation from "./assets/book-consultation.webp";
import chooseDoctor from "./assets/choose-doctor.webp";
import followUp from "./assets/follow-up.webp";
import onboarding from "./assets/onboarding.webp";
import getPrescription from "./assets/prescription.webp";

const ConsultationProcess = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  return (
    <div ref={containerRef} className={"h-[400vh]"}>
      <SectionWrapper
        WrapperProps={{
          className: "h-screen sticky top-0 overflow-hidden pt-10",
        }}
        className={"h-full"}
      >
        <Typography
          fontVariant={"heading-xlarge"}
          underline
          mx={"auto"}
          ta={"center"}
        >
          Consultation Process
        </Typography>
        <motion.div className={"relative flex h-[calc(100%_-_200px)] lg:h-full w-full"}>
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
    [0.2, 0.22, 0.38, 0.4],
    [0, 1, 1, 0],
  );
  const card3Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.42, 0.58, 0.6],
    [0, 1, 1, 0],
  );
  const card4Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.62, 0.78, 0.8],
    [0, 1, 1, 0],
  );
  const card5Opacity = useTransform(
    scrollYProgress,
    [0.8, 0.82, 0.98, 1],
    [0, 1, 1, 1],
  );

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
        "absolute flex h-[90%] w-full flex-col justify-center gap-y-3 sm:items-center md:text-center"
      }
    >
      <Typography
        fz={"h5"}
        mx={"auto"}
        c={"gray.8"}
        className={"flex items-center gap-3 capitalize"}
      >
        {position}. {title}
        <Badge variant={"outline"} radius={"sm"} bg={"green.1"}>
          {time}
        </Badge>
      </Typography>
      <Image
        loading={"lazy"}
        unstyled
        src={icon}
        alt={title}
        mx={"auto"}
        w={{ base: "100%", xs: "min(70%, 500px)" }}
      />
      <Typography mx={"auto"} fz={"md"} fw={600} ta={"center"} c={"gray.8"}>
        {description}
      </Typography>
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
