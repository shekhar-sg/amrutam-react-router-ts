import { Avatar, Box, Group } from "@mantine/core";
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
    <Box
      className={
        "flex h-83.25 w-99.25 flex-col gap-9 rounded-3xl border-2 border-gray-300/30 p-6.25"
      }
    >
      <Group gap={24}>
        <Avatar
          size={"lg"}
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
      <Typography fz={"lg"} c={"gray.9"} ta={'start'} lh={'lg'}>
        {content}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
