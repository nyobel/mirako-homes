import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Properties from "../components/Property/Properties";
import HomeArticles from "../components/HomeArticles/HomeArticles";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <Properties />
      <HomeArticles />
    </>
  );
};

export default HomePage;
