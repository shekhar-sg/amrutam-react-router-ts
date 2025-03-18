import { Box, type BoxProps } from "@mantine/core";
import {
  type SpringOptions,
  useInView,
  type UseInViewOptions,
  useSpring,
} from "framer-motion";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import Typography, {
  type TypographyProps,
} from "~/components/atoms/typography";

interface CountUpProps extends PropsWithChildren<TypographyProps> {
  start?: number;
  end: number;
  SpringProps?: SpringOptions;
  countProps?: BoxProps;
  ViewPortProps?: UseInViewOptions;
}

const CountUp = (props: CountUpProps) => {
  const {
    start = 0,
    end,
    SpringProps,
    countProps,
    ViewPortProps,
    ...rest
  } = props;
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    ...ViewPortProps,
  });
  const countSpring = useSpring(count, {
    stiffness: 100,
    damping: 100,
    ...SpringProps,
  });

  useEffect(() => {
    if (isInView) {
      countSpring.set(end);
    } else {
      countSpring.set(start);
    }
  }, [countSpring, end, isInView, start]);

  useEffect(() => {
    countSpring.on("change", (latestValue) => {
      setCount(Math.round(latestValue));
    });
  }, [countSpring]);

  return (
    <Typography ref={ref} {...rest}>
      <Box component={"span"} {...countProps}>
        {count}+
      </Box>
      {rest.children}
    </Typography>
  );
};

export default CountUp;
