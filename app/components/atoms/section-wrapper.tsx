import {
  Box,
  type BoxProps,
  Container,
  type ContainerProps,
  createPolymorphicComponent,
} from "@mantine/core";
import { forwardRef, type Ref } from "react";

interface SectionWrapperProps extends ContainerProps {
  WrapperProps?: Omit<BoxProps, "ref">;
  WrapperRef?: Ref<HTMLElement>;
}

const SectionWrapperBasic = (
  props: SectionWrapperProps,
  ref: Ref<HTMLDivElement>,
) => {
  const { WrapperProps, WrapperRef, ...rest } = props;
  return (
    <Box
      w={"100%"}
      component={"section"}
      ref={WrapperRef}
      {...(WrapperProps as BoxProps)}
    >
      <Container
        ref={ref}
        mx={"auto"}
        w={"100%"}
        maw={1440}
        px={{
          base: 16,
          lg: 24,
          xl: 100,
        }}
        {...rest}
      />
    </Box>
  );
};

const SectionWrapper = createPolymorphicComponent<"div", SectionWrapperProps>(
  forwardRef(SectionWrapperBasic),
);

export default SectionWrapper;
