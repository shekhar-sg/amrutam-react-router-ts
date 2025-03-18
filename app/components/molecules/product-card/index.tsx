import { Image } from "@mantine/core";
import type { HTMLAttributes } from "react";
import clsx from "clsx";
import ProductCardCartCTA from "./product-card-cart-action-cta";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  data: {
    id: string | number;
    image: string;
    title: string;
    price: string | number;
    quantity: string | number;
  };
  position: number;
}

const tags = [
  { text: "New", color: "bg-red-700" },
  { text: "Sale", color: "bg-amber-700" },
  { text: "Offer", color: "bg-primary-main" },
  { text: "Discount", color: "bg-blue-700" },
  { text: "Best Seller", color: "bg-purple-700" },
  { text: "Trending", color: "bg-indigo-700" },
  { text: "Hot", color: "bg-pink-700" },
  { text: "Limited", color: "bg-gray-700" },
  { text: "Popular", color: "bg-sky-400" },
  { text: "Exclusive", color: "bg-black" },
];

const ProductCard = (props: ProductCardProps) => {
  const { data, position, ...rest } = props;
  const { id, image, title, price, quantity } = data;

  const tag = tags[position % tags.length];
  return (
    <div
      {...rest}
      className={clsx(
        "group bg-primary-50 relative flex w-[320px] flex-col overflow-hidden rounded-2xl",
        rest.className,
      )}
    >
      <div className={"h-[200px] overflow-hidden"}>
        <Image
          loading={'lazy'}
          unstyled
          src={image}
          alt={title}
          className={
            "h-full w-full cursor-pointer object-cover object-center transition-transform duration-5000 group-hover:scale-150"
          }
        />
      </div>
      <div
        className={
          "flex flex-1 flex-col gap-y-3 rounded-b-2xl border-2 border-t-0 border-gray-300 px-4 pt-3 pb-4 text-start"
        }
      >
        <h6 className={"line-clamp-2 text-xl text-ellipsis"} title={title}>
          {title}
        </h6>
        <div className={"mt-auto flex items-center justify-between gap-x-4"}>
          <span
            className={
              "line-clamp-2 text-base font-normal text-ellipsis text-neutral-800"
            }
          >
            ₹{price}・{quantity}
          </span>
          <ProductCardCartCTA productId={String(id)} />
        </div>
      </div>
      <div
        className={clsx(
          "absolute top-4 -left-7 flex w-30 -rotate-45 transform items-center justify-center px-2 py-1 text-sm font-semibold text-white shadow-xl",
          tag.color,
        )}
      >
        {tag.text}
      </div>
      <ProductCardCartCTA
        productId={String(id)}
        variant={"delete"}
        className={"absolute top-4 right-4"}
      />
    </div>
  );
};

export default ProductCard;
