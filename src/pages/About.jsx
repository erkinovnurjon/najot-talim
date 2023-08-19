/* eslint-disable no-undef */
import Cursorhover from "../components/Cursorhover";
import Hovertitle from "../components/Hovertitle";
import Aboutcard from "../components/Aboutcard";
import Header from "../components/Header";
const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Cursorhover />

        <div className="hover_title">
          <Hovertitle />
        </div>
        <div className="about__card">
          <Aboutcard />
        </div>
      </div>
    </div>
  );
}

export default About