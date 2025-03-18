import { motion } from "framer-motion";
import doctor1 from "./assets/doctors/doctor-1.webp";
import doctor2 from "./assets/doctors/doctor-2.webp";
import doctor3 from "./assets/doctors/doctor-3.webp";
import doctor4 from "./assets/doctors/doctor-4.webp";
import doctor5 from "./assets/doctors/doctor-5.webp";
import doctor6 from "./assets/doctors/doctor-6.webp";
import doctor7 from "./assets/doctors/doctor-7.webp";
import doctor8 from "./assets/doctors/doctor-8.webp";
import doctor9 from "./assets/doctors/doctor-9.webp";
import doctor10 from "./assets/doctors/doctor-10.webp";

import clsx from "clsx";

const doctors = [
  { src: doctor1, orbitRadius: "28%", initial: 80 },
  { src: doctor2, orbitRadius: "28%", initial: 180 },
  { src: doctor3, orbitRadius: "45%", initial: 350 },
  { src: doctor4, orbitRadius: "62%", initial: 45 },
  { src: doctor5, orbitRadius: "62%", initial: 300 },
  { src: doctor6, orbitRadius: "80%", initial: 0 },
  { src: doctor7, orbitRadius: "80%", initial: 110 },
  { src: doctor8, orbitRadius: "80%", initial: 135 },
  { src: doctor9, orbitRadius: "80%", initial: 250 },
  { src: doctor10, orbitRadius: "100%", initial: 40 },
];

const SolarSystem = () => {
  return (
    <div className="absolute right-[-25%] -z-1 flex size-100 items-center justify-center rounded-full bg-transparent max-md:top-[-25%] max-sm:top-[-30%] sm:right-[-15%] sm:size-115 md:right-0 lg:right-[5%] lg:size-125">
      {/* Center PD */}
      <div className="flex size-1/7 items-center justify-center rounded-full bg-green-400 font-bold text-white">
        PD
      </div>

      {/* Orbits */}
      {doctors.map(({ src, orbitRadius, initial }, index, arr) => {
        const duration = 25;
        const isFirstOfTypeOrbit =
          index === arr.findIndex((a) => a.orbitRadius === orbitRadius);
        return (
          <motion.div
            key={initial}
            className={clsx(
              "absolute flex items-center justify-center rounded-full border-green-500/30",
              {
                border: isFirstOfTypeOrbit,
              },
            )}
            initial={{ rotate: initial }}
            animate={{
              rotate: [initial, initial + 360],
              transition: {
                duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            style={{
              width: orbitRadius,
              height: orbitRadius,
            }}
          >
            <motion.img
              src={src}
              alt={`doctor-${index}`}
              initial={{ rotate: -initial }}
              animate={{
                rotate: [-initial, -(initial + 360)],
                transition: {
                  duration,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              className={"absolute h-12 w-12 rounded-full"}
              style={{
                top: -20,
                left: "50%",
                transform: "translateX(-100%)",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SolarSystem;
