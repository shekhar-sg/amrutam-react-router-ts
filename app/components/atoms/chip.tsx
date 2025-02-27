import clsx from "clsx";
import {
  type ComponentProps,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type ChipProps<T extends ElementType> = ComponentProps<T> & {
  label?: ReactNode;
  as?: T;
};

const className =
  "px-4 py-1 rounded-full bg-gray-200 text-gray-800 border border-primary-main cursor-pointer";

const Chip = <T extends ElementType>(props: ChipProps<T>) => {
  const { label, as: Wrapper = "button", children, ...rest } = props;

  return (
    <Wrapper
      {...(rest as HTMLAttributes<HTMLElement>)}
      className={clsx(className, rest.className)}
    >
      {label ?? children}
    </Wrapper>
  );
};

export default Chip;
