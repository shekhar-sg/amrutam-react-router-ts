import { useInView } from "framer-motion";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";

interface CountUpProps extends HTMLAttributes<HTMLDivElement> {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  countProps?: HTMLAttributes<HTMLElement>;
}

const CountUp = (props: CountUpProps) => {
  const {
    start = 0,
    end,
    duration = 1,
    delay = 0,
    countProps,
    ...rest
  } = props;
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);
        setCount(start + Math.round((end - start) * progress));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, start, end, duration]);
  return (
    <div ref={ref} {...rest}>
      <span {...countProps}>{Math.round(count)}+</span>
      {rest.children}
    </div>
  );
};

export default CountUp;
