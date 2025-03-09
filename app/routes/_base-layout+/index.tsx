import DiscoverAyurveda from "~/components/templates/discover-ayurveda";
import Stats from "~/components/templates/stats";
import Experts from "~/components/templates/experts";
import Video from "~/components/templates/video";
import DownloadApp from "~/components/templates/download-app";

const HomePage = () => {
  return (
    <>
      {/*<HeroSection />*/}
      <DiscoverAyurveda />
      <Stats />
      <Experts />
      <Video />
      <DownloadApp />
    </>
  );
};

export default HomePage;
