import DiscoverSectionData from "~/components/templates/discover-ayurveda/constants";
import YogaCards from "~/components/templates/discover-ayurveda/yoga-cards";
import SectionWrapper from "~/components/atoms/section-wrapper";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

const { heading, image, description, cards } = DiscoverSectionData;
const DiscoverAyurveda = () => {
  const isIpadScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <SectionWrapper
      WrapperProps={{
        className: "pt-30",
      }}
      className={"flex flex-col items-center justify-center gap-5"}
    >
      <div
        className={
          "flex flex-col items-center justify-center gap-5 text-center"
        }
      >
        <h2>{heading.split("wisdom,")}</h2>
        <p className={"max-w-2xl"}>{description}</p>
      </div>
      <div className={"flex flex-col items-center justify-center gap-5 lg:flex-row"}>
        <div className={"hidden flex-1 flex-col items-end gap-15 lg:flex"}>
          {cards.slice(0, 3).map((card, index) => {
            return (
              <YogaCards
                key={card.title}
                image={card.icon}
                title={card.title}
                description={card.description}
                className={clsx(
                  "text-right lg:flex-row-reverse",
                  index % 2 && "mr-8",
                )}
              />
            );
          })}
        </div>
        <img src={image} alt={"yoga"} />
        <div
          className={
            "flex flex-row flex-wrap justify-center gap-5 lg:flex-1 lg:flex-col lg:gap-15"
          }
        >
          {(isIpadScreen ? cards.slice(3) : cards).map((card, index) => {
            return (
              <YogaCards
                key={card.title}
                image={card.icon}
                title={card.title}
                description={card.description}
                className={clsx(
                  "!w-[calc((100%-20px)/2)] flex-col text-center lg:!w-full lg:flex-row lg:text-start",
                  index % 2 && "lg:ml-8",
                )}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DiscoverAyurveda;
