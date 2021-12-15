import "../assets/styles/pages/Home.scss";

import { HomeBackground, PortfolioItem } from "../components";

const Home = () => {
  return (
    <div className="home">
      <HomeBackground />
      <PortfolioItem />
    </div>
  );
};

export default Home;
