import ConsultationProcess from "app/components/templates/home/consultation-process";
import DiscoverAyurveda from "app/components/templates/home/discover-ayurveda";
import ExpertDoctorsSection, {
  type ExpertDoctorsSectionProps,
} from "app/components/templates/home/experts";
import HeroSection from "app/components/templates/home/hero-section";
import Stats from "app/components/templates/home/stats";
import Testimonials from "app/components/templates/home/testimonials";
import "node_modules/swiper/swiper.min.css";
import "node_modules/swiper/modules/pagination.min.css";
import Video from "app/components/templates/home/video";
import { backendClient } from "~/axios-clients/backend.server";
import Partners from "~/components/templates/home/partners";
import type { Route } from "~/route-types/types/app/routes/_base-layout+/+types";
import type { AllDoctorsAPIResponse } from "~/store/types/api/responses/all-doctors";
import { logger } from "~/utils/logger";

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  return (
    <>
      <HeroSection />
      <Partners />
      <DiscoverAyurveda />
      <Stats />
      {loaderData && <ExpertDoctorsSection data={loaderData} />}
      <Video />
      <ConsultationProcess />
      <Testimonials />
    </>
  );
};

export default HomePage;

export const loader = async () => {
  return backendClient
    .get<AllDoctorsAPIResponse>("/patient/doctors/all")
    .then((res) => {
      const { data } = res.data;
      if (data) {
        return data.doctors
          .filter(
            (d) =>
              d.isApproved && d.photo && d.specialities.some((s) => s.active),
          )
          .map(
            ({
              _id,
              firstname,
              lastname,
              experience,
              specialities,
              slug,
              photo,
            }) => {
              return {
                id: _id,
                name: `${firstname} ${lastname}`.trim(),
                experienceInYear: experience,
                speciality: specialities[0].name,
                slug,
                photo,
              } as ExpertDoctorsSectionProps["data"][number];
            },
          );
      }
    })
    .catch(() => {
      return undefined;
    });
};
