import SectionWrapper from "~/components/atoms/section-wrapper";
import { Link } from "react-router";
import { FooterData } from "~/components/organisms/footer/footer-data";

const { title, follow_us, otherLinkTitle, otherLinks } = FooterData;

const Footer = () => {
  return (
    <SectionWrapper
      component={"footer"}
      WrapperProps={{ className: "bg-primary-300", }}
      className={"flex flex-col justify-around gap-4 pt-10 pb-20 sm:flex-row"}
    >
      <div
        className={
          "mb-8.5 flex w-full flex-col gap-3 text-left md:m-0 md:w-[40%]"
        }
      >
        <h4 className={"text-primary-main heading-small font-medium"}>
          {title}
        </h4>
        <Link to={"/"} className={"text-primary-main heading-xsmall"}>
          {follow_us.email}
        </Link>
        <br />
        <p className={"heading-xsmall mb-5 text-stone-700"}>
          {" "}
          {follow_us.address}
        </p>
        <Link
          to={"/"}
          className={"text-primary-main heading-xsmall hover:underline"}
        >
          {follow_us.phone}
        </Link>
        <div className={"flex gap-x-2"}>
          {follow_us.social.map((social) => {
            const { platform, href, icon: Icon } = social;
            return (
              <button
                key={platform}
                className={
                  "group border-primary-main aspect-square size-10 rounded-full p-2 text-white transition-all hover:border hover:bg-transparent"
                }
              >
                <Icon className={"group-hover:text-primary-main size-full"} />
              </button>
            );
          })}
        </div>
      </div>
      <div
        className={"flex w-full flex-col space-y-1 text-left md:mb-0 md:w-auto"}
      >
        <h4 className={"heading-small text-primary-main mb-2 font-medium"}>
          {otherLinkTitle}
        </h4>
        {otherLinks.map((link) => {
          return (
            <Link
              key={link.title}
              to={link.href}
              className={
                "heading-xsmall block w-fit text-stone-700 no-underline transition-all hover:underline"
              }
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Footer;
