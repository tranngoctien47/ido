import React, { useEffect } from "react";
import Banner from "./components/banner";
import Box from "./components/box";
import Footer from "./components/footer";
import GamePlay from "./components/gameplay";
import Header from "./components/header";
import Marketplace from "./components/marketplace";
import RoadMap from "./components/roadmap";
import Team from "./components/team";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <Banner />
      <GamePlay />
      <Box />
      <Marketplace />
      <RoadMap />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
