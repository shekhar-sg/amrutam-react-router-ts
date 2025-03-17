import SectionWrapper from "~/components/atoms/section-wrapper";
import Counter from "~/components/atoms/count-up";

const Stats = () => {
  return (
    <SectionWrapper
      WrapperProps={{
        className: "sm:border-2 border-secondary-200",
      }}
      className={
        "grid grid-cols-1 gap-y-14 py-17 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {stats.map((stat) => {
        const { title, description } = stat;
        return (
          <Counter
            key={title}
            end={title}
            className={
              "text-primary-main flex flex-col justify-center text-center text-[26px] font-bold"
            }
            ViewPortProps={{
              once: true,
            }}
          >
            <p className={"text-[26px] font-normal"}>{description}</p>
          </Counter>
        );
      })}
    </SectionWrapper>
  );
};

export default Stats;

const stats = [
  {
    title: 500,
    description: "Happy Users",
  },
  {
    title: 38,
    description: "Verified Doctors",
  },
  {
    title: 25,
    description: "Specialities",
  },
  {
    title: 200,
    description: "Success Stories",
  },
];
