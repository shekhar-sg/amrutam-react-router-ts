import {
  Swiper,
  type SwiperProps,
  SwiperSlide,
  type SwiperSlideProps,
} from "swiper/react";
import clsx from "clsx";
import ExpertCard from "~/components/templates/home/experts/expert-card";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as swiperType } from "swiper/types";

export interface ExpertSliderProps<T extends { id: string }>
  extends SwiperProps {
  SwiperSlideProps?: SwiperSlideProps;
  spaceBetween?: number;
  setSwiper?: (are: swiperType) => void;
}

const ExpertSlider = <T extends { id: string }>(
  props: ExpertSliderProps<T>,
) => {
  const {
    SwiperSlideProps,
    slidesPerView = "auto",
    setSwiper,
    ...rest
  } = props;

  return (
    <Swiper
      className={"!w-full !pb-12.5"}
      onInit={(swiper) => setSwiper && setSwiper(swiper)}
      slidesPerView={slidesPerView}
      // freeMode={{
      //   enabled: true,
      //   sticky: true,
      // }}
      loop
      autoplay
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      centeredSlides={true}
      breakpoints={{
        640: {
          centeredSlides: false,
        },
      }}
      // cssMode
      wrapperClass={"space-x-12 py-4"}
      {...rest}
    >
      {Array.from({ length: 15 }).map((_, index) => {
        const isAutoSlidePerView = slidesPerView === "auto";
        return (
          <SwiperSlide
            key={index}
            {...SwiperSlideProps}
            className={clsx(
              "w-fit",
              {
                "!w-fit": isAutoSlidePerView,
              },
              SwiperSlideProps?.className,
            )}
          >
            <ExpertCard />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ExpertSlider;
