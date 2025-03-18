import { ActionIcon, type ActionIconProps, Button, Flex } from "@mantine/core";
import { useCallback, useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { MdEast, MdWest } from "react-icons/md";
import { Link } from "react-router";
import type { Swiper as SwiperClass } from "swiper/types";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import ExpertSlider from "~/components/templates/home/experts/expert-slider";

const actionIconDefaultProps: ActionIconProps = {
  radius: "xl",
  bd: "1px solid",
  variant: "outline",
  display: "flex",
  visibleFrom: "lg",
  bg: "white",
  size: "xl",
  fz: "h5",
  className: "aspect-square shrink-0 items-center justify-center",
};

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
      <Typography
        underline
        fontVariant={"heading-xlarge"}
        className={"mx-auto mb-20 md:mb-13.5"}
      >
        Top Ayurvedic Experts For
      </Typography>
      <Flex align={"center"} gap={52} mb={42}>
        <ActionIcon
          {...actionIconDefaultProps}
          onClick={() => handleTransition("prev")}
        >
          <MdWest />
        </ActionIcon>
        <ExpertSlider onInit={setSwiper} />
        <ActionIcon
          {...actionIconDefaultProps}
          onClick={() => handleTransition("next")}
        >
          <MdEast />
        </ActionIcon>
      </Flex>
      <Button
        component={Link}
        to={"/"}
        visibleFrom={"lg"}
        variant={"transparent"}
        w={"fit-content"}
        h={"fit-content"}
        px={25}
        py={16}
        fz={"h5"}
        fw={"normal"}
        className={
          "mx-auto items-center gap-2 border-none shadow-[0_2px_6px_0] shadow-black/25"
        }
        rightSection={<IoChevronForward />}
      >
        Find More Experts
      </Button>
    </SectionWrapper>
  );
};

export default Experts;
