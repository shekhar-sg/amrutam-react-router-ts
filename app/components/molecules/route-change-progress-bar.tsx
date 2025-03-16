import { useNavigation } from "react-router";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const RouteChangeProgressBar = ({ className }: { className?: string }) => {
  const router = useNavigation();
  const [isNavigating, setIsNavigating] = useState(true);
  useEffect(() => {
    setIsNavigating(router.state === "loading");
  }, [router.state]);
  return (
    isNavigating && (
      <div
        className={clsx(
          "bg-primary-main fixed top-0 left-0 z-20 flex h-1 w-full items-center",
          className,
        )}
      >
        <motion.div
          className={
            "bg-primary-50 my-auto h-full w-1/5 rounded-[100%] opacity-80"
          }
          initial={{
            x: "-50%",
          }}
          animate={{
            x: "450%",
            transition: {
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
            },
          }}
        />
      </div>
    )
  );
};

export default RouteChangeProgressBar;
