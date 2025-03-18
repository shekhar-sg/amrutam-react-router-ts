import { Avatar, Group, Stack } from "@mantine/core";
import { MdStar } from "react-icons/md";
import Typography from "~/components/atoms/typography";
import { testimonialReviews } from "~/components/templates/home/testimonials/testimonials";

interface TestimonialCardProps {
  data: (typeof testimonialReviews)[number];
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { data } = props;
  const { fullStars, content, photoText } = data;
  return (
    <Stack
      gap={14}
      p={26}
      w={300}
      h={300}
      align={"flex-start"}
      className={"rounded-3xl border-2 border-gray-300/30"}
    >
      <Group gap={24}>
        <Avatar
          size={"md"}
          variant={"light"}
          color={"primary"}
          className={"shrink-0 rounded-full"}
        >
          {photoText}
        </Avatar>
        <div className={"flex items-center justify-center gap-1"}>
          {Array.from({ length: fullStars }).map((_, i) => (
            <MdStar key={i} size={24} className={"text-amber-400"} />
          ))}
        </div>
      </Group>
      <Typography fz={"md"} c={"gray.9"} ta={"start"} lh={"sm"}>
        {content}
      </Typography>
    </Stack>
  );
};

export default TestimonialCard;
