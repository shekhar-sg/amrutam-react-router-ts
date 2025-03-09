import DiscoverAyurveda from "~/components/templates/discover-ayurveda";
import Stats from "~/components/templates/stats";
import Experts from "~/components/templates/experts";
import Video from "~/components/templates/video";

const HomePage = () => {
  return (
    <>
      {/*<HeroSection />*/}
      <DiscoverAyurveda />
      <Stats />
      <Experts />
      <Video />
    </>
  );
};

export default HomePage;
