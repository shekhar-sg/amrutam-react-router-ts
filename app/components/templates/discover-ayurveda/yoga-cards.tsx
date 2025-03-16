import type { ComponentProps } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface DiscoverCardProps extends ComponentProps<typeof motion.div> {
  image: string;
  title: string;
  description: string;
}

const YogaCards = (props: DiscoverCardProps) => {
  const { image, title, description, className, ...rest } = props;
  return (
    <motion.div
      className={clsx(
        "border-secondary-100 flex items-center gap-4 rounded-xl border p-4 lg:max-w-90 lg:border-none",
        className,
      )}
      {...rest}
    >
      <img src={image} alt={title} className={"aspect-square size-25"} />
      <div className={"space-y-1"}>
        <h6 className={"heading-small md:heading-xsmall font-semibold"}>
          {title}
        </h6>
        <span className={"text-text-primary-100"}>{description}</span>
      </div>
    </motion.div>
  );
};

export default YogaCards;
