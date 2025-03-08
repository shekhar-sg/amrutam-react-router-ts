import type { HtmlHTMLAttributes } from "react";
import clsx from "clsx";

interface DiscoverCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
}

const YogaCards = (props: DiscoverCardProps) => {
  const { image, title, description, className, ...rest } = props;
  return (
    <div
      className={clsx(
        "border-secondary-100 lg:max-w-90 flex items-center gap-4 rounded-xl border p-4 lg:border-none",
        className,
      )}
      {...rest}
    >
      <img src={image} alt={title} className={"aspect-square size-25"} />
      <div className={"space-y-1"}>
        <h6 className={"heading-small md:heading-xsmall font-semibold"}>{title}</h6>
        <span className={"text-text-primary-100"}>{description}</span>
      </div>
    </div>
  );
};

export default YogaCards;
