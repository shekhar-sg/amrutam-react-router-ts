import { MdStar } from "react-icons/md";
import { testimonialReviews } from "~/components/templates/home/testimonials/testimonials";

interface TestimonialCardProps {
  data: (typeof testimonialReviews)[number];
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { data } = props;
  const { fullStars, content, photoText } = data;
  return (
    <div className={"flex w-99.25 gap-9 h-83.25 flex-col p-6.25 rounded-3xl border-2 border-secondary-200"}>
      <div className={"flex gap-6"}>
        <div
          className={" text-primary-main text-sm font-semibold bg-primary-100 flex size-14 items-center justify-center rounded-full"}
        >
          {photoText}
        </div>
        <div className={"flex items-center justify-center gap-1"}>
          {Array.from({ length: fullStars }).map((_, i) => (
            <MdStar key={i} size={24} className={"text-amber-400"} />
          ))}
        </div>
      </div>
      <p className={"text-lg text-start"}>{content}</p>
    </div>
  );
};

export default TestimonialCard;