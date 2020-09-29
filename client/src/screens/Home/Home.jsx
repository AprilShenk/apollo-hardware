import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Carousel from '../../components/Carousel/Carousel'
import WelcomeContainer from '../../components/WelcomeContainer/WelcomeContainer'

const Home = (props) => {
  return (
    <Layout handleChange={props.handleChange}>
      <Carousel />
      <WelcomeContainer/>
    </Layout>
  );
};

export default Home;
