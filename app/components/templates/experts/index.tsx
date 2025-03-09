import SectionWrapper from "~/components/atoms/section-wrapper";
import { MdEast, MdWest } from "react-icons/md";
import ExpertSlider from "~/components/templates/experts/expert-slider";
import { useCallback, useState } from "react";
import type { Swiper as SwiperClass } from "swiper/types";
import { Link } from "react-router";
import { IoChevronForward } from "react-icons/io5";

const Experts = () => {
  const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined);

  const handleTransition = useCallback(
    (direction: "next" | "prev") => {
      if (swiper) {
        swiper[direction === "next" ? "slideNext" : "slidePrev"]();
      }
    },
    [swiper],
  );
  return (
    <SectionWrapper className={"mb-2 flex h-screen flex-col text-center"}>
      <h2 className={"py-20 md:py-14"}>title</h2>
      <div className={"flex items-center gap-12.5"}>
        <button
          className={
            "hover:text-primary-main hover:border-primary-main hidden aspect-square size-18 items-center justify-center rounded-full border-zinc-400 bg-white text-center text-4xl text-zinc-400 transition-all lg:flex"
          }
          onClick={() => handleTransition("prev")}
        >
          <MdWest />
        </button>
        <ExpertSlider onInit={setSwiper} />
        <button
          className={
            "hover:text-primary-main hover:border-primary-main hidden aspect-square size-18 items-center justify-center rounded-full border-zinc-400 bg-white text-center text-4xl text-zinc-400 transition-all lg:flex"
          }
          onClick={() => handleTransition("next")}
        >
          <MdEast />
        </button>
      </div>
      <Link
        to={"/"}
        className={
          "text-primary-main mx-auto mt-10.75 hidden items-center gap-2 rounded-lg px-6.25 py-4 text-center text-2xl capitalize shadow-[0_2px_6px_0] shadow-black/25 md:inline-flex"
        }
      >
        Find more Experts
        <IoChevronForward className={"mt-1"} />
      </Link>
    </SectionWrapper>
  );
};

export default Experts;
