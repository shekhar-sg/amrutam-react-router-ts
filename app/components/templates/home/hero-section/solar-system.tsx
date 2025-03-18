import { motion } from "framer-motion";
import HeroDoctor1 from "./assets/hero-doctors/hero-doctor-1.jpg";
import HeroDoctor2 from "./assets/hero-doctors/hero-doctor-2.jpg";
import HeroDoctor3 from "./assets/hero-doctors/hero-doctor-3.jpg";
import HeroDoctor4 from "./assets/hero-doctors/hero-doctor-4.jpg";
import HeroDoctor5 from "./assets/hero-doctors/hero-doctor-5.jpg";
import HeroDoctor6 from "./assets/hero-doctors/hero-doctor-6.jpg";
import HeroDoctor7 from "./assets/hero-doctors/hero-doctor-7.jpg";
import HeroDoctor8 from "./assets/hero-doctors/hero-doctor-8.jpg";
import HeroDoctor9 from "./assets/hero-doctors/hero-doctor-9.jpg";
import HeroDoctor10 from "./assets/hero-doctors/hero-doctor-10.jpg";
import clsx from "clsx";

const doctors = [
  { src: HeroDoctor1, orbitRadius: "28%", initial: 80 },
  { src: HeroDoctor2, orbitRadius: "28%", initial: 180 },
  { src: HeroDoctor3, orbitRadius: "45%", initial: 350 },
  { src: HeroDoctor4, orbitRadius: "62%", initial: 45 },
  { src: HeroDoctor9, orbitRadius: "62%", initial: 300 },
  { src: HeroDoctor5, orbitRadius: "80%", initial: 0 },
  { src: HeroDoctor6, orbitRadius: "80%", initial: 110 },
  { src: HeroDoctor7, orbitRadius: "80%", initial: 135 },
  { src: HeroDoctor8, orbitRadius: "80%", initial: 250 },
  { src: HeroDoctor10, orbitRadius: "100%", initial: 40 },
];

const SolarSystem = () => {
  return (
    <div className="absolute right-[-25%] sm:right-[-15%] lg:right-[5%] -z-1 flex size-100 items-center justify-center rounded-full bg-transparent max-sm:top-[-30%] max-md:top-[-25%] sm:size-115 md:right-0 lg:size-125">
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
