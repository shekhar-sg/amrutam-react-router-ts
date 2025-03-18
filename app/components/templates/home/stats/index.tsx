import { Grid } from "@mantine/core";
import CountUp from "~/components/atoms/count-up";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";

const Stats = () => {
  return (
    <SectionWrapper
      component={Grid}
      WrapperProps={{
        className: "sm:border-2 border-gray-300/50",
      }}
      py={70}
      gutter={70}
      overflow={'hidden'}
    >
      {stats.map((stat) => {
        const { title, description } = stat;
        return (
          <Grid.Col
            key={title}
            span={{ sm: 6, xl: 3 }}
            className={"flex justify-center"}
          >
            <CountUp
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
          </Grid.Col>
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
