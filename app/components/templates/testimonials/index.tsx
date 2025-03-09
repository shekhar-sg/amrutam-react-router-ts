import SectionWrapper from "~/components/atoms/section-wrapper";
import {
  testimonialReviews,
  testimonialVideos,
} from "~/components/templates/testimonials/testimonials";
import TestimonialCard from "~/components/templates/testimonials/testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import { RiPlayCircleLine } from "react-icons/ri";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router";

const Testimonials = () => {
  return (
    <SectionWrapper className={"space-y-16.75 text-center"}>
      <h2
        className={
          "border-b-primary-200 text-primary-main mx-auto w-fit border-b-8 px-8 font-bold capitalize"
        }
      >
        customer testimonials
      </h2>
      <div className={"flex flex-wrap items-center justify-center gap-6"}>
        <Swiper
          wrapperClass={"space-x-6"}
          slidesPerView={"auto"}
          loop
          autoplay
          modules={[Autoplay]}
        >
          {testimonialReviews.map((review, index) => {
            return (
              <SwiperSlide key={index} className={"!w-fit"}>
                <TestimonialCard data={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h2
        className={
          "border-b-primary-200 text-primary-main mx-auto w-fit border-b-8 px-8 font-bold capitalize"
        }
      >
        Hear from Our Customers
      </h2>
      <div className={"flex flex-wrap items-center justify-center gap-6"}>
        <Swiper
          wrapperClass={"space-x-6"}
          slidesPerView={"auto"}
          modules={[Autoplay]}
        >
          {testimonialVideos.map((video, index) => {
            return (
              <SwiperSlide key={index} className={"!w-fit"}>
                <div
                  className={
                    "relative flex aspect-square h-99.5 items-center justify-center overflow-hidden rounded-3xl"
                  }
                >
                  <img
                    src={video.thumbnail}
                    className={
                      "absolute inset-0 -z-10 size-full object-cover object-center"
                    }
                  />
                  <button
                    className={"rounded-full border-none bg-transparent p-0"}
                  >
                    <RiPlayCircleLine className={"size-20.5"} />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link
        to={"/"}
        className={
          "text-primary-main mx-auto hidden items-center gap-2 rounded-lg px-6.25 py-4 text-center text-2xl capitalize shadow-[0_2px_6px_0] shadow-black/25 md:inline-flex"
        }
      >
        See More Reviews <IoChevronForward className={"mt-1"} />
      </Link>
    </SectionWrapper>
  );
};

export default Testimonials;
