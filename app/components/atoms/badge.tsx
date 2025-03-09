import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLElement> {
  anchorOrigin?: {
    vertical?: "top" | "bottom";
    horizontal?: "left" | "right";
  };
  badgeContent?: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Badge = (props: BadgeProps) => {
  const {
    anchorOrigin,
    badgeContent,
    icon,
    iconPosition = "left",
    children,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={clsx(
        "absolute flex items-center justify-center rounded-full bg-gray-200 px-3 py-1 text-gray-800",
        {
          "flex-row-reverse": iconPosition === "right",
          "top-0": anchorOrigin?.vertical === "top",
          "bottom-0": anchorOrigin?.vertical === "bottom",
          "left-0": anchorOrigin?.horizontal === "left",
          "right-0": anchorOrigin?.horizontal === "right",
        },
        rest.className,
      )}
    >
      {icon && (
        <span
          className={clsx(
            { "mr-1": iconPosition === "left" },
            { "ml-1": iconPosition === "right" },
          )}
        >
          {icon}
        </span>
      )}
      {badgeContent ?? children}
    </div>
  );
};

export default Badge;
