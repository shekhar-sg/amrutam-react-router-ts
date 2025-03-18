import SectionWrapper from "~/components/atoms/section-wrapper";
import CountUp from "~/components/atoms/count-up";
import Typography from "~/components/atoms/typography";

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
          <CountUp
            key={title}
            end={title}
            fz={"h4"}
            fw={700}
            className={"flex flex-col justify-center text-center"}
            ViewPortProps={{
              once: true,
            }}
          >
            <Typography fz={"h4"} fw={"normal"}>
              {description}
            </Typography>
          </CountUp>
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
