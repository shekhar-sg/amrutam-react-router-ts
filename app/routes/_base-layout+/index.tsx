import DiscoverAyurveda from "~/components/templates/discover-ayurveda";
import Stats from "~/components/templates/stats";
import Experts from "~/components/templates/experts";
import Video from "~/components/templates/video";
import DownloadApp from "~/components/templates/download-app";
import Testimonials from "~/components/templates/testimonials";
import HeroSection from "~/components/templates/hero-section";
import ConsultationProcess from "~/components/templates/consultation-process";

const HomePage = () => {
  return (
    <div className={"space-y-26"}>
      <HeroSection />
      <DiscoverAyurveda />
      <Stats />
      <Experts />
      <Video />
      <ConsultationProcess />
      <Testimonials />
      <DownloadApp />
    </div>
  );
};

export default HomePage;
