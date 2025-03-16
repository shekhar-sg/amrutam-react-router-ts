import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import CartButton from "~/components/molecules/cart-button";
import RouteChangeProgressBar from "~/components/molecules/route-change-progress-bar";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  return (
    <SectionWrapper
      as={AnimatedNavbar}
      WrapperProps={{
        className: `bg-primary-50 shadow-md relative`,
      }}
      className={"flex items-center justify-between py-4"}
    >
      <Link
        to={"/"}
        className={
          "text-primary-main animate-bounce text-2xl font-bold tracking-wide uppercase"
        }
      >
        Amrutam
      </Link>
      <Link to="/shop" className={"btn btn-primary-main"}>
        Go to Shop
      </Link>
      <CartButton />
      <RouteChangeProgressBar className={"!absolute top-auto bottom-0"} />
    </SectionWrapper>
  );
};

export default Navbar;

const AnimatedNavbar = ({
  children,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<typeof motion.header>>) => {
  const { scrollY } = useScroll({
    axis: "y",
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let currentY = scrollY.get();
    scrollY.on("change", (latest) => {
      if (latest > currentY && latest > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      currentY = latest;
    });
  }, [scrollY]);

  return (
    <motion.header
      {...rest}
      style={{
        ...rest.style,
      }}
      animate={{
        y: !isScrolled ? 0 : -100,
        opacity: !isScrolled ? 1 : 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.header>
  );
};
