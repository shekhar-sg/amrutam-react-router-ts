import {
  Avatar,
  Badge,
  Button,
  Card,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import { IoBandageOutline } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { Link } from "react-router";
import Typography from "~/components/atoms/typography";

export interface ExpertDoctorCardProps {
  data: {
    id: string;
    photo: string;
    slug: string;
    name: string;
    experienceInYear: number;
    speciality?: string;
  };
}

const ExpertDoctorCard = (props: ExpertDoctorCardProps) => {
  const { data } = props;
  const { photo, name, experienceInYear, speciality, slug } = data;
  const theme = useMantineTheme();
  return (
    <Card
      bg={"transparent"}
      radius={"40px"}
      h={446}
      w={295}
      className={"items-center gap-y-6 border-2 border-gray-300/30"}
      padding={0}
      pt={40}
    >
      <Avatar
        size={150}
        className={"shrink-0 rounded-full"}
        src={photo}
        name={name}
        color={"initials"}
        variant={"filled"}
        alt={name}
        imageProps={{
          loading: "lazy",
        }}
      />
      <Flex direction={"column"} align={"center"} justify={"center"} px={24}>
        <Typography fz={"h6"} mb={8}>
          {name}
        </Typography>
        <Badge
          variant={"transparent"}
          mb={15}
          fw={"normal"}
          c={"gray.9"}
          leftSection={
            <TbSchool fontSize={18} color={theme.colors.primary["5"]} />
          }
        >
          {experienceInYear} {experienceInYear > 1 ? "years" : "year"} of
          experience
        </Badge>
        {speciality && (
          <Badge
            variant={"light"}
            px={12}
            py={6}
            h={"fit-content"}
            fz={"md"}
            fw={600}
            tt={"capitalize"}
            leftSection={
              <IoBandageOutline
                fontSize={18}
                color={theme.colors.primary["5"]}
              />
            }
          >
            {speciality}
          </Badge>
        )}
      </Flex>
      <Button
        aria-label={"book a session"}
        component={Link}
        to={`/doctor/profile/${slug}`}
        mt={"auto"}
        fullWidth
        py={24}
        h={"fit-content"}
        radius={0}
      >
        Book a Session
      </Button>
    </Card>
  );
};

export default ExpertDoctorCard;
