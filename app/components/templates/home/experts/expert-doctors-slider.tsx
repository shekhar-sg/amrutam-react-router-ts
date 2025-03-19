import { Box } from "@mantine/core";
import {
  Swiper,
  type SwiperProps,
  SwiperSlide,
  type SwiperSlideProps,
} from "swiper/react";
import clsx from "clsx";
import ExpertDoctorCard, {
  type ExpertDoctorCardProps,
} from "~/components/templates/home/experts/expert-doctor-card";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as swiperType } from "swiper/types";

export interface ExpertDoctorsSliderProps extends SwiperProps {
  SwiperSlideProps?: SwiperSlideProps;
  spaceBetween?: number;
  setSwiper?: (are: swiperType) => void;
  data: ExpertDoctorCardProps["data"][];
}

const ExpertDoctorsSlider = (props: ExpertDoctorsSliderProps) => {
  const {
    SwiperSlideProps,
    slidesPerView = "auto",
    setSwiper,
    data,
    ...rest
  } = props;

  return (
    <Box
      component={Swiper}
      className={"!w-full !pb-12.5"}
      onInit={(swiper) => setSwiper && setSwiper(swiper)}
      slidesPerView={slidesPerView}
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
      wrapperClass={"space-x-12 py-4"}
      {...rest}
    >
      {data.map((doctor, index) => {
        const isAutoSlidePerView = slidesPerView === "auto";
        return (
          <SwiperSlide
            key={doctor.slug}
            {...SwiperSlideProps}
            className={clsx(
              "w-fit",
              {
                "!w-fit": isAutoSlidePerView,
              },
              SwiperSlideProps?.className,
            )}
          >
            <ExpertDoctorCard data={doctor} />
          </SwiperSlide>
        );
      })}
    </Box>
  );
};

export default ExpertDoctorsSlider;
