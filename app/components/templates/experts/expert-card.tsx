import Chip from "~/components/atoms/chip";
import { IoBandageOutline } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { Link } from "react-router";
import Badge from "~/components/atoms/badge";
import { RiStarFill } from "react-icons/ri";

const ExpertCard = () => {
  return (
    <div
      className={
        "flex h-[446px] w-[295px] flex-col items-center gap-7 overflow-hidden rounded-[40px] pt-10.5 shadow-[0_0_10px_0] shadow-stone-300"
      }
    >
      <div
        className={
          "bg-primary-100 relative aspect-square size-37.5 rounded-full object-cover object-center"
        }
      >
        <Badge
          iconPosition={"right"}
          icon={<RiStarFill className={"text-xl text-yellow-500"} />}
          badgeContent={"4.5"}
          className={
            "custom-gradient-1 right-0 -bottom-2 left-0 mx-auto w-fit px-4 text-white"
          }
        />
      </div>
      <div className={"flex flex-col items-center text-center"}>
        <h5 className={"mb-2 text-xl leading-5 font-bold"}>Name</h5>
        <h6 className={"mb-1.5 text-[15px] leading-4 font-medium"}>
          Qualification
        </h6>
        <Chip
          as={"div"}
          className={
            "text-primary-main mb-1.5 flex h-min !cursor-default items-center gap-1 border-none bg-transparent py-0 text-base font-semibold"
          }
        >
          <TbSchool className={"text-xl"} />
          experience
        </Chip>
        <Chip
          as={"div"}
          className={
            "text-primary-main bg-primary-main/12 flex h-min !cursor-default items-center gap-1 border-none px-2 py-0 text-base font-semibold"
          }
        >
          <IoBandageOutline className={"text-base"} />
          Speciality
        </Chip>
      </div>
      <Link
        to={"/"}
        className={
          "bg-primary-main mt-auto w-full p-6 text-center text-xl leading-none font-semibold text-white"
        }
      >
        Book a Session
      </Link>
    </div>
  );
};

export default ExpertCard;
