import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
  type Ref,
} from "react";
import clsx from "clsx";

type SectionWrapperProps<T extends ElementType = "section"> =
  ComponentProps<T> & {
    WrapperProps?: ComponentPropsWithoutRef<T>;
    as?: T;
  };

const SectionWrapper = <T extends ElementType = "section">(
  props: SectionWrapperProps<T>,
  ref: Ref<HTMLElement>,
) => {
  const { WrapperProps, as: Wrapper = "section", ...rest } = props;
  return (
    <Wrapper
      ref={ref}
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

export default forwardRef(SectionWrapper);
