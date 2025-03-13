import {
  type SpringOptions,
  useInView,
  type UseInViewOptions,
  useSpring,
} from "framer-motion";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";

interface CountUpProps extends HTMLAttributes<HTMLDivElement> {
  start?: number;
  end: number;
  SpringProps?: SpringOptions;
  countProps?: HTMLAttributes<HTMLElement>;
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
    <div ref={ref} {...rest}>
      <span {...countProps}>{count}+</span>
      {rest.children}
    </div>
  );
};

export default CountUp;
