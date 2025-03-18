import Chip from "~/components/atoms/chip";
import { useAppSelector } from "~/store/hooks";
import { Link } from "react-router";

const CartButton = () => {
  const cart = useAppSelector(({ user }) => user.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Chip
      className={
        "text-primary-main relative rounded-full border px-6 py-1 font-bold"
      }
      as={Link}
      to={"/cart"}
      aria-label={'go to cart page'}
    >
      Cart
      {cart.length > 0 && (
        <span
          className={
            "bg-background-default absolute top-[-30%] right-0 flex aspect-square size-5 items-center justify-center rounded-full border text-sm"
          }
        >
          {totalItems}
        </span>
      )}
    </Chip>
  );
};

export default CartButton;
