import { useNavigation } from "react-router";
import { useEffect, useState } from "react";
import clsx from "clsx";

const RouteChangeProgressBar = ({ className }: { className?: string }) => {
  const router = useNavigation();
  const [isNavigating, setIsNavigating] = useState(true);
  useEffect(() => {
    setIsNavigating(router.state === "loading");
  }, [router.state]);
  return (
    <hr
      className={clsx(
        "from-primary-100 to-primary-main fixed top-0 left-0 z-20 h-1 w-full transform bg-gradient-to-r transition-transform duration-400",
        {
          "-translate-x-full opacity-0": !isNavigating,
          "translate-x-0": isNavigating,
        },
        className,
      )}
    />
  );
};

export default RouteChangeProgressBar;
