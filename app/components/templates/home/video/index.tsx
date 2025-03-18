import { ActionIcon, Box } from "@mantine/core";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import GIF from "./assets/yt-video.gif";
import { RiPlayCircleLine } from "react-icons/ri";

const VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/ZkBWy2flIUI?si=lUpsp8GrnBFVelHr";

const Video = () => {
  return (
    <SectionWrapper>
      <Typography fontVariant={"heading-xlarge"} underline mb={40} mx={"auto"}>
        How Ayurveda Transformed My life ?
      </Typography>
      <Box
        className={
          "relative flex aspect-video w-full items-center justify-center"
        }
      >
        <img
          src={GIF}
          alt={"GIF"}
          className={"absolute z-0 size-full brightness-50"}
        />
        <ActionIcon variant={"transparent"} c={"white"} size={'xl'} fz={"h1"}>
          <RiPlayCircleLine />
        </ActionIcon>
      </Box>
    </SectionWrapper>
  );
};

export default Video;
