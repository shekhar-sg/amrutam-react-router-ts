import { Box, Image, Rating } from "@mantine/core";
import clsx from "clsx";
import { IoStar, IoStarOutline } from "react-icons/io5";
import appleStore from "~/assets/apple-store.webp";

import googlePlayStore from "~/assets/google-play-store.webp";
import Typography from "~/components/atoms/typography";

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
            <Typography fz={"xs"} fw={700} c={"gray.7"}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className={"flex w-full items-center justify-center gap-3"}>
        <Rating
          defaultValue={3.5}
          fractions={2}
          readOnly
          c={"primary"}
          className={"gap-x-1"}
          emptySymbol={<IoStarOutline />}
          fullSymbol={<IoStar />}
        />
        <Typography c={"primary"} fz={"xl"} fw={700}>
          3.5
        </Typography>
        <Typography fz={"xs"} c={"gray.7"} fw={700}>
          Average user rating
        </Typography>
      </Box>
      <Box className={"flex h-7.75 w-full justify-center gap-1.75"}>
        <Image
          unstyled
          loading={"eager"}
          src={googlePlayStore}
          alt={"app store"}
        />
        <Image unstyled loading={"eager"} src={appleStore} alt={"play store"} />
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
