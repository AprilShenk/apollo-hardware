import React from "react";
import { BreakpointProvider } from 'react-socks';
import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import WelcomeContainer from "../../components/WelcomeContainer/WelcomeContainer";

const Home = () => {
  return (
    <BreakpointProvider>
      <Layout>
        <Carousel />
        <WelcomeContainer />
      </Layout>
    </BreakpointProvider>
  );
};

export default Home;
