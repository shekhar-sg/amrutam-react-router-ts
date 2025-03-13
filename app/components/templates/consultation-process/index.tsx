import SectionWrapper from "~/components/atoms/section-wrapper";
import onboarding from "./assets/onboarding.png";
import chooseDoctor from "./assets/choose-doctor.png";
import bookConsultation from "./assets/book-consultation.png";
import getPrescription from "./assets/prescription.png";
import followUp from "./assets/follow-up.png";
import clsx from "clsx";
import { motion } from "framer-motion";
import Chip from "~/components/atoms/chip";

const ConsultationProcess = () => {
  return (
    <SectionWrapper className={"relative space-y-12 md:space-y-20"}>
      <h2
        className={
          "text-primary-main border-b-primary-200 mx-auto w-fit border-b-8 px-6 font-bold"
        }
      >
        Consultation Process
      </h2>
      <div className={"flex flex-col gap-10 px-4 md:gap-3"}>
        {process.map((step, index) => {
          const { title, time, description, icon } = step;
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={clsx("flex flex-col items-center gap-3 text-center", {
                "md:self-end": index % 2,
                "md:self-start": !(index % 2),
              })}
            >
              <div
                className={
                  "flex items-center gap-3 text-3xl font-semibold capitalize"
                }
              >
                {index + 1}. {title}
                <Chip
                  as={"span"}
                  label={time}
                  className={"bg-primary-200 rounded-lg text-base font-bold"}
                />
              </div>
              <img src={icon} alt={title} />
              <p className={"w-[70%] text-base"}>{description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ConsultationProcess;

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
