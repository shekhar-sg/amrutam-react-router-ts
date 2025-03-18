import { Box, Image } from "@mantine/core";
import type { ComponentProps } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Typography, {
  TypographyResponsive,
} from "~/components/atoms/typography";

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
        "flex items-center gap-4 rounded-xl border border-gray-300/80 p-4 lg:border-none",
        className,
      )}
      {...rest}
    >
      <Image
        unstyled
        loading={'lazy'}
        src={image}
        alt={title}
        className={"aspect-square size-25"}
      />
      <Box className={"space-y-1"}>
        <Typography
          fontVariant={"heading-small"}
          fw={600}
          c={"gray.9"}
          fz={{
            ...TypographyResponsive["heading-small"],
            lg: TypographyResponsive["heading-xsmall"].lg,
          }}
        >
          {title}
        </Typography>
        <span className={"text-text-primary-100"}>{description}</span>
      </Box>
    </motion.div>
  );
};

export default YogaCards;
