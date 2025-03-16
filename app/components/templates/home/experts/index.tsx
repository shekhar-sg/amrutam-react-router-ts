import SectionWrapper from "~/components/atoms/section-wrapper";
import { MdEast, MdWest } from "react-icons/md";
import ExpertSlider from "~/components/templates/home/experts/expert-slider";
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
    <SectionWrapper
      className={"flex flex-col py-13.5 text-center"}
      WrapperProps={{
        className: "mb-25",
      }}
    >
      <h2 className={"text-primary-main mb-20 font-bold capitalize md:mb-13.5"}>
        top ayurvedic experts for
      </h2>
      <div className={"mb-10.75 flex items-center gap-12.5"}>
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
          "text-primary-main btn mx-auto hidden items-center gap-2 border-none bg-transparent px-6.25 py-4 text-2xl shadow-[0_2px_6px_0] shadow-black/25 md:inline-flex"
        }
      >
        Find More Experts
        <IoChevronForward className={"mt-1"} />
      </Link>
    </SectionWrapper>
  );
};

export default Experts;
