import DiscoverAyurveda from "app/components/templates/home/discover-ayurveda";
import Stats from "app/components/templates/home/stats";
import Video from "app/components/templates/home/video";
import HeroSection from "app/components/templates/home/hero-section";
import Partners from "~/components/templates/home/partners";
import ConsultationProcess from "app/components/templates/home/consultation-process";
import Experts from "app/components/templates/home/experts";
import Testimonials from "app/components/templates/home/testimonials";
import "node_modules/swiper/swiper.min.css";
import "node_modules/swiper/modules/pagination.min.css";
// import '@mantine/carousel/styles.css';

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
