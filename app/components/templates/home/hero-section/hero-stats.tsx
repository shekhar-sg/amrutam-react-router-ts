import clsx from "clsx";
import StarRating from "~/components/atoms/star-rating";

const HeroStats = () => {
  return (
    <div className={"w-fit space-y-3"}>
      <div className={"ga flex border-b border-stone-300"}>
        {stats.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col text-center gap-1 items-center justify-center px-7 py-3.5",
              { "border-l border-stone-300": index },
            )}
          >
            <h6 className={"text-xl font-bold"}>{item.title}</h6>
            <span className={"inline-block text-xs font-medium text-stone-600"}>
              {item.description}
            </span>
          </div>
        ))}
      </div>
      <div className={"flex w-full items-center justify-center gap-3"}>
        <StarRating
          rating={3.5}
          clickable={false}
          starClassName={"size-5 text-primary-main"}
        />
        <span className={"text-primary-main text-xl font-bold"}>3.5</span>
        <span className={"inline-block text-xs font-medium text-stone-600"}>
          Average user rating
        </span>
      </div>
      <div className={"flex h-7.75 w-full justify-center gap-1.75"}>
        <img src={"/google-play-store.png"} alt={"app store"} />
        <img src={"/apple-store.png"} alt={"play store"} />
      </div>
    </div>
  );
};

export default HeroStats;

const stats = [
  {
    title: "~500+",
    description: "Average active user",
  },
  {
    title: "~40+",
    description: "Average daily free calls",
  },
];
