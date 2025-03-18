import { Box, type BoxProps } from "@mantine/core";
import clsx from "clsx";
import type { ElementType } from "react";
import Typography from "~/components/atoms/typography";

interface BannerProps extends BoxProps {
  features: {
    icon: ElementType;
    about: string;
  }[];
}

const Banner = (props: BannerProps) => {
  const { features, className, ...rest } = props;
  return (
    <Box
      bg={"secondary.1"}
      className={clsx(
        "grid w-full overflow-hidden rounded-md border-1 border-gray-300/30 shadow-md md:grid-cols-2 lg:rounded-2xl xl:grid-cols-4",
        className,
      )}
      {...rest}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Box
            c={"primary"}
            key={index}
            className={
              "flex items-center gap-7.5 border-1 border-gray-300/30 p-4 md:gap-3 md:px-6 md:py-8"
            }
          >
            <Box className={"flex aspect-square rounded-full border p-3"}>
              <Icon className={"size-10"} />
            </Box>
            <Typography fw={"bold"}>{feature.about}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Banner;
