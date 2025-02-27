import type { ElementType, HTMLAttributes } from "react";
import clsx from "clsx";
import Typography from "~/components/atoms/typography";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  features: {
    icon: ElementType;
    about: string;
  }[];
}

const Banner = (props: BannerProps) => {
  const { features, className, ...rest } = props;
  return (
    <div
      className={clsx(
        "bg-background-default shadow-primary-main/20 grid rounded-2xl shadow-md md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      {...rest}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className={
              "text-primary-main border-primary-100/20 flex items-center gap-7.5 border-r-3 p-4 last-of-type:border-none md:gap-3 md:px-6 md:py-8"
            }
          >
            <div className={"flex aspect-square rounded-full border p-3"}>
              <Icon className={"size-10"} />
            </div>
            <Typography variant={"body-xsmall"} className={"font-semibold"}>
              {feature.about}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
