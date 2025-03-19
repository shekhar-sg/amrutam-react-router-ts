import DiscoverAyurveda from "app/components/templates/home/discover-ayurveda";
import Stats from "app/components/templates/home/stats";
import Video from "app/components/templates/home/video";
import HeroSection from "app/components/templates/home/hero-section";
import { lazy } from "react";
import Partners from "~/components/templates/home/partners";
import ConsultationProcess from "app/components/templates/home/consultation-process";
// import Experts from "app/components/templates/home/experts";
// import Testimonials from "app/components/templates/home/testimonials";
import "node_modules/swiper/swiper.min.css";
import "node_modules/swiper/modules/pagination.min.css";

const Experts = lazy(() => import("app/components/templates/home/experts"));
const Testimonials = lazy(
  () => import("app/components/templates/home/testimonials"),
);

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Partners />
      <DiscoverAyurveda />
      <Stats />
      <Experts />
      <Video />
      <ConsultationProcess />
      <Testimonials />
    </>
  );
};

export default HomePage;
