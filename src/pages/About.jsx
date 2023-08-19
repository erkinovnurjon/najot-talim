import Cursorhover from "../components/Cursorhover";
import Hovertitle from "../components/Hovertitle";
import Aboutcard from "../components/Aboutcard";
const About = () => {
  return (
    <>
      <div className="container">
        <Cursorhover />

        <div className="hover_title">
          <Hovertitle />
        </div>

        <div className="about__card">
          <Aboutcard/>
        </div>
      </div>
    </>
  );
}

export default About