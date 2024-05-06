import Hero from "../components/Hero/Hero";
import Properties from "../components/Property/Properties";
import Articles from "../components/Articles/Articles";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Properties isHome={true}/>
      <Articles isHome={true}/>
    </>
  );
};

export default HomePage;
