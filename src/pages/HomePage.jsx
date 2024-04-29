import Hero from "../components/Hero/Hero";
import Properties from "../components/Property/Properties";
import HomeArticles from "../components/HomeArticles/HomeArticles";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Properties isHome={true}/>
      <HomeArticles isHome={true}/>
    </>
  );
};

export default HomePage;
