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
        "bg-background-default shadow-primary-main/20 border-primary-100/20 grid w-full overflow-hidden rounded-md border-1 shadow-md md:grid-cols-2 lg:rounded-2xl xl:grid-cols-4",
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
              "text-primary-main border-primary-100/20 flex items-center gap-7.5 border-1 p-4 md:gap-3 md:px-6 md:py-8"
            }
          >
            <div className={"flex aspect-square rounded-full border p-3"}>
              <Icon className={"size-10"} />
            </div>
            <Typography className={"font-semibold"}>{feature.about}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
