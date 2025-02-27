import type { ElementType, HTMLAttributes } from "react";
import clsx from "clsx";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  features: {
    icon: ElementType;
    about: string;
  }[];
}

const Banner = (props: BannerProps) => {
  const { features, className, ...rest } = props;
  return (
    <div className={clsx("flex items-center shadow", className)} {...rest}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className={
              "text-primary-main flex items-center gap-4 border-r-amber-300"
            }
          >
            <div className={"flex aspect-square rounded-full border p-3"}>
              <Icon className={"size-10"} />
            </div>
            <p>{feature.about}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
