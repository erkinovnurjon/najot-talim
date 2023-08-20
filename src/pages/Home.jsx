import React from "react";
import Hero from "../HomeComponent/Hero";
import Advantag from "../HomeComponent/Advantag";
import Courses from "../HomeComponent/Courses";
import Partners from "../HomeComponent/partners";

const Home = () => {
  return (
    <>
      <Hero />
      <Advantag />
      <Courses/> 
      <Partners/>
    </>
  );
};

export default Home;
