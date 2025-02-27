import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import CartButton from "~/components/molecules/cart-button";
import RouteChangeProgressBar from "~/components/molecules/route-change-progress-bar";

const Navbar = () => {
  return (
    <SectionWrapper
      as={"header"}
      WrapperProps={{
        className: "bg-primary-50 shadow-md sticky top-0",
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
