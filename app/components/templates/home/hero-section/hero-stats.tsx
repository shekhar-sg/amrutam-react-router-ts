import { Box, Image } from "@mantine/core";
import clsx from "clsx";
import StarRating from "~/components/atoms/star-rating";
import Typography from "~/components/atoms/typography";

import googlePlayStore from "./assets/google-play-store.png";
import appleStore from "./assets/apple-store.png";

const HeroStats = () => {
  return (
    <Box className={"w-fit space-y-3"}>
      <Box className={"ga flex border-b border-stone-300"}>
        {stats.map((item, index) => (
          <Box
            key={index}
            className={clsx(
              "flex flex-col items-center justify-center gap-1 px-7 py-3.5 text-center",
              { "border-l border-stone-300": index },
            )}
          >
            <Typography className={"text-xl font-bold"}>
              {item.title}
            </Typography>
            <Box className={"inline-block text-xs font-medium text-stone-600"}>
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={"flex w-full items-center justify-center gap-3"}>
        <StarRating
          rating={3.5}
          clickable={false}
          starClassName={"size-5 text-primary-main"}
        />
        <Box className={"text-primary-main text-xl font-bold"}>3.5</Box>
        <Box className={"inline-block text-xs font-medium text-stone-600"}>
          Average user rating
        </Box>
      </Box>
      <Box className={"flex h-7.75 w-full justify-center gap-1.75"}>
        <Image unstyled src={googlePlayStore} alt={"app store"} />
        <Image unstyled src={appleStore} alt={"play store"} />
      </Box>
    </Box>
  );
};

export default HeroStats;

const stats = [
  {
    title: "~500+",
    description: "Average active user",
  },
  {
    title: "~40+",
    description: "Average daily free calls",
  },
];
