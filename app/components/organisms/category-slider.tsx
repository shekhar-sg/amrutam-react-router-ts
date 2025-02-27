import {
  Swiper,
  type SwiperProps,
  SwiperSlide,
  type SwiperSlideProps,
} from "swiper/react";
import Chip from "~/components/atoms/chip";
import clsx from "clsx";
import { keySelector } from "~/utils/keySelector";
import { NavLink } from "react-router";

export interface CategorySliderProps<T extends { id: string }>
  extends SwiperProps {
  categories: T[];
  onChangeCategory?: (category: T, index: number) => void;
  SwiperSlideProps?: SwiperSlideProps;
  selectorKey?: ((category: T) => string) | keyof T;
  spaceBetween?: number;
}

const CategorySlider = <T extends { id: string }>(
  props: CategorySliderProps<T>,
) => {
  const {
    categories,
    onChangeCategory,
    SwiperSlideProps,
    selectorKey,
    slidesPerView = "auto",
    ...rest
  } = props;

  return (
    <Swiper
      slidesPerView={slidesPerView}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      cssMode
      {...rest}
    >
      {categories.map((category, index) => {
        const key = selectorKey
          ? keySelector(category, selectorKey)
          : category.id;

        const isAutoSlidePerView = slidesPerView === "auto";
        return (
          <SwiperSlide
            key={key}
            {...SwiperSlideProps}
            className={clsx(
              {
                "!w-fit": isAutoSlidePerView,
              },
              SwiperSlideProps?.className,
            )}
          >
            <Chip
              label={key}
              as={NavLink}
              to={`/shop/${key.toLowerCase()}`}
              onClick={() => {
                onChangeCategory?.(category, index);
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategorySlider;
