import React, { type HTMLAttributes } from "react";
import clsx from "clsx";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";

interface StarRatingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  rating: number;
  clickable?: boolean;
  onRatingChange?: (rating: number) => void;
  starClassName?: string;
}

const StarRating = (props: StarRatingProps) => {
  const {
    rating,
    clickable = true,
    onRatingChange,
    starClassName,
    ...rest
  } = props;
  const handleClick = (index: number) => {
    if (clickable && onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <div className={clsx("flex", rest.className)} {...rest}>
      {[...Array(5)].map((_, index) => {
        const fullStar = index < Math.floor(rating);
        const halfStar = index < rating && index >= Math.floor(rating);
        return (
          <span
            key={index}
            className={clsx("cursor-pointer text-amber-500", {
              "pointer-events-none": !clickable,
            })}
            onClick={() => handleClick(index)}
          >
            {fullStar ? (
              <MdStar className={clsx("", starClassName)} />
            ) : halfStar ? (
              <MdStarHalf className={clsx("", starClassName)} />
            ) : (
              <MdStarBorder className={clsx("", starClassName)} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
