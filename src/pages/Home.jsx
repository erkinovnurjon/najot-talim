import React from "react";
import Hero from "../HomeComponent/Hero";
import Advantag from "../HomeComponent/Advantag";
import Courses from "../HomeComponent/Courses";
import Partners from "../HomeComponent/partners";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advantag />
      <Courses />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
