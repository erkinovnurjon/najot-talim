import Cursorhover from "../components/Cursorhover";
import Hovertitle from "../components/Hovertitle";
import Aboutcard from "../components/Aboutcard";
import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
        <Header />
      <div className="container">
        <Cursorhover />

        <div className="hover_title">
          <Hovertitle />
        </div>

        <div className="about__card">
          <Aboutcard/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About