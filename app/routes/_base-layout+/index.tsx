import DiscoverAyurveda from "app/components/templates/home/discover-ayurveda";
import Stats from "app/components/templates/home/stats";
// import Experts from "app/components/templates/home/experts";
import Video from "app/components/templates/home/video";
import Testimonials from "app/components/templates/home/testimonials";
import HeroSection from "app/components/templates/home/hero-section";
import ConsultationProcess from "app/components/templates/home/consultation-process";
import "node_modules/swiper/swiper-bundle.min.css";
import Partners from "~/components/templates/home/partners";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Partners/>
      <DiscoverAyurveda />
      <Stats />
      {/*<Experts />*/}
      <Video />
      <ConsultationProcess />
      <Testimonials />
    </>
  );
};

export default HomePage;
