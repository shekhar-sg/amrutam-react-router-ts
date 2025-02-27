import type { ElementType, HTMLAttributes } from "react";
import clsx from "clsx";

interface SectionWrapperProps<T extends ElementType>
  extends HTMLAttributes<HTMLDivElement> {
  WrapperProps?: HTMLAttributes<HTMLElement>;
  as?: T;
}

const SectionWrapper = <T extends ElementType>(
  props: SectionWrapperProps<T>,
) => {
  const { WrapperProps, as: Wrapper = "section", ...rest } = props;
  return (
    <Wrapper
      {...WrapperProps}
      className={clsx("w-full", WrapperProps?.className)}
    >
      <div
        {...rest}
        className={clsx(
          "mx-auto w-full max-w-[1440px] px-4 lg:px-6 xl:px-25",
          rest.className,
        )}
      />
    </Wrapper>
  );
};

export default SectionWrapper;
