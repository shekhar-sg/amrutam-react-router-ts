import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { addToCart, deleteFromCart, removeFromCart } from "~/store/slices/user";
import clsx from "clsx";
import { IoMdCloseCircle } from "react-icons/io";

interface ProductCardCartCTAProps {
  productId: string;
  variant?: "addRemove" | "delete";
  className?: string;
}

const ProductCardCartCTA = ({
  productId,
  variant = "addRemove",
  className,
}: ProductCardCartCTAProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(({ user }) => user.cart);
  const isAddedInCart =
    cart.findIndex((item) => item.id === String(productId)) !== -1;

  if (variant === "delete") {
    return isAddedInCart ? (
      <button
        className={clsx(
          "bg-primary-main flex items-center p-1 whitespace-nowrap hover:[&_span]:w-24",
          className,
        )}
        onClick={() => {
          dispatch(deleteFromCart(String(productId)));
        }}
      >
        <span
          className={
            "transition-width w-0 overflow-hidden text-[13px] duration-300"
          }
        >
          Remove All
        </span>
        <IoMdCloseCircle className={"shrink-0 text-xl text-white"} />
      </button>
    ) : null;
  }

  return (
    <div className={clsx("mt-auto flex items-center gap-4", className)}>
      {isAddedInCart && (
        <>
          <button
            className={"p-1"}
            onClick={() => {
              dispatch(removeFromCart(String(productId)));
            }}
          >
            <PiMinusBold className={"text-xl text-white"} />
          </button>
          <span
            className={"text-primary-main text-center text-lg font-semibold"}
          >
            {cart.find((item) => item.id === String(productId))?.quantity}
          </span>
        </>
      )}
      <button
        className={"p-1"}
        onClick={() => {
          dispatch(addToCart(String(productId)));
        }}
      >
        <PiPlusBold className={"text-xl text-white"} />
      </button>
    </div>
  );
};

export default memo(ProductCardCartCTA);
