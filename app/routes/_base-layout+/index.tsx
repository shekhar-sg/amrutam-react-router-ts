// import DiscoverAyurveda from "app/components/templates/home/discover-ayurveda";
import Stats from "app/components/templates/home/stats";
import Experts from "app/components/templates/home/experts";
import Video from "app/components/templates/home/video";
import Testimonials from "app/components/templates/home/testimonials";
// import ConsultationProcess from "app/components/templates/home/consultation-process";
import HeroSection from "app/components/templates/home/hero-section";
import "node_modules/swiper/swiper-bundle.min.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/*<DiscoverAyurveda />*/}
      <Stats />
      <Experts />
      <Video />
      {/*<ConsultationProcess />*/}
      <Testimonials />
    </>
  );
};

export default HomePage;
