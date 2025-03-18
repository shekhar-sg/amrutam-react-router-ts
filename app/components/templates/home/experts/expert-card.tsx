import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { IoBandageOutline } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { Link } from "react-router";
import Typography from "~/components/atoms/typography";

const ExpertCard = () => {
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
      <Avatar size={150} className={"shrink-0 rounded-full"} />
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Typography fz={"h6"} mb={8}>
          Name
        </Typography>
        <Typography fz={"md"} fw={500} mb={12} c={"gray.7"}>
          Qualification
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
          25 years of experience
        </Badge>
        <Badge
          variant={"light"}
          px={12}
          py={6}
          h={"fit-content"}
          fz={"md"}
          fw={600}
          leftSection={
            <IoBandageOutline fontSize={18} color={theme.colors.primary["5"]} />
          }
        >
          Speciality
        </Badge>
      </Flex>
      <Button component={Link} to={"/"} mt={'auto'} fullWidth py={24} h={"fit-content"} radius={0}>
        Book a Session
      </Button>
    </Card>
  );
};

export default ExpertCard;
