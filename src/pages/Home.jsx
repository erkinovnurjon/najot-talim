import Hero from "../HomeComponent/Hero";
import Advantag from "../HomeComponent/Advantag";
import Courses from "../HomeComponent/Courses";
import Partners from "../HomeComponent/partners";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Banner from "../HomeComponent/Banner";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advantag />
      <Courses />
      <Partners />
      <Banner/>

      <Footer />
    </>
  );
};

export default Home;
