import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Image,
} from "@mantine/core";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import {
  testimonialReviews,
  testimonialVideos,
} from "~/components/templates/home/testimonials/testimonials";
import TestimonialCard from "~/components/templates/home/testimonials/testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { RiPlayCircleLine } from "react-icons/ri";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router";

const Testimonials = () => {
  return (
    <SectionWrapper
      className={"space-y-16.75 text-center"}
      WrapperProps={{
        className: "mb-17",
      }}
    >
      <Typography fontVariant={"heading-xlarge"} underline mx={"auto"}>
        Customer Testimonials
      </Typography>
      <Group gap={6} wrap={"wrap"} align={"center"} justify={"center"}>
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
      </Group>
      <Typography fontVariant={"heading-xlarge"} underline mx={"auto"}>
        Hear from Our Customers
      </Typography>
      <div className={"flex flex-wrap items-center justify-center gap-6"}>
        <Swiper
          wrapperClass={"space-x-6"}
          slidesPerView={"auto"}
          modules={[Autoplay]}
        >
          {testimonialVideos.map((video, index) => {
            return (
              <SwiperSlide key={index} className={"!w-fit"}>
                <BackgroundImage
                  src={video.thumbnail}
                  radius={"lg"}
                  className={"aspect-square h-99.5 overflow-hidden"}
                >
                  <Center h={"100%"}>
                    <ActionIcon
                      variant={"transparent"}
                      c={"white"}
                      size={"xl"}
                      fz={"h1"}
                    >
                      <RiPlayCircleLine />
                    </ActionIcon>
                  </Center>
                </BackgroundImage>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Button
        component={Link}
        variant={"transparent"}
        to={"/"}
        w={"fit-content"}
        h={"fit-content"}
        px={25}
        py={16}
        fz={"h5"}
        fw={"normal"}
        className={
          "mx-auto items-center gap-2 border-none shadow-[0_2px_6px_0] shadow-black/25"
        }
      >
        See More Reviews <IoChevronForward className={"mt-1"} />
      </Button>
    </SectionWrapper>
  );
};

export default Testimonials;
