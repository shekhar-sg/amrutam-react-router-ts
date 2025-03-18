import { ActionIcon, Anchor, Flex, Stack } from "@mantine/core";
import { Link } from "react-router";
import SectionWrapper from "~/components/atoms/section-wrapper";
import Typography from "~/components/atoms/typography";
import { FooterData } from "~/components/organisms/footer/footer-data";

const { title, follow_us, otherLinkTitle, otherLinks } = FooterData;

const Footer = () => {
  return (
    <SectionWrapper
      component={"footer"}
      WrapperProps={{ bg: "primary.1" }}
      className={"flex flex-col gap-y-10 pt-10 pb-40 md:pb-20 md:flex-row"}
    >
      <Stack gap={28}>
        <Typography fz={"h5"} fw={600}>
          {title}
        </Typography>
        <Anchor component={Link} to={"/"} fz={"md"} fw={"bold"}>
          {follow_us.email}
        </Anchor>
        <Typography fz={"md"} fw={"normal"} c={"gray.9"} maw={300}>
          {follow_us.address}
        </Typography>
        <Anchor component={Link} fz={"md"} to={"/"} fw={"bold"}>
          {follow_us.phone}
        </Anchor>
        <div className={"flex gap-x-2"}>
          {follow_us.social.map((social) => {
            const { platform, href, icon: Icon } = social;
            return (
              <ActionIcon
                key={platform}
                component={Link}
                to={href}
                radius={"xl"}
                className={"shadow shadow-black/40"}
                size={"xl"}
                fz={"24"}
              >
                <Icon />
              </ActionIcon>
            );
          })}
        </div>
      </Stack>
      <Flex direction={"column"} mx={{ md: "auto" }}>
        <Typography fz={"h5"} fw={600} mb={28}>
          {otherLinkTitle}
        </Typography>
        {otherLinks.map((link) => {
          return (
            <Anchor
              component={Link}
              key={link.title}
              to={link.href}
              c={"gray.9"}
            >
              {link.title}
            </Anchor>
          );
        })}
      </Flex>
    </SectionWrapper>
  );
};

export default Footer;
