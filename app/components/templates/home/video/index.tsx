import SectionWrapper from "~/components/atoms/section-wrapper";
import GIF from "./assets/yt-video.gif";
import { RiPlayCircleLine } from "react-icons/ri";

const VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/ZkBWy2flIUI?si=lUpsp8GrnBFVelHr";

const Video = () => {
  return (
    <SectionWrapper className={"space-y-10 text-center"}>
      <h2
        className={
          "text-primary-main border-primary-200 mx-auto w-fit px-6 leading-none font-bold capitalize sm:border-b-8 sm:leading-10 md:leading-16"
        }
      >
        How Ayurveda Transformed My life ?
      </h2>
      <div className={"relative w-full aspect-video flex items-center justify-center"}>
        <button
          className={
            "rounded-full z-1 border-none bg-transparent p-0"
          }
        >
          <RiPlayCircleLine className={"size-20.5"} />
        </button>
        <img
          src={GIF}
          alt={"GIF"}
          className={"absolute z-0 size-full brightness-50"}
        />
      </div>
    </SectionWrapper>
  );
};

export default Video;
