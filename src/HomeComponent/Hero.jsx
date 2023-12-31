import { Link } from 'react-router-dom';
import './Hero.scss'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__inner container" style={{display:'block'}}>
        <div className="hero__wrapper">
          <div className="hero__title">
            <div className="hero__title-table">
              <div className="hero__title-job">Kasblarni</div>

              <div className="hero__title-job\">Kasblarni</div>

              <div className="text">
                <span className="burad-t t1">
                  “Najot Ta’lim”<span className="hero__title-text">da</span>
                </span>
                <br />
                <span className="burad-t t2">mutaxassislardan</span> <br />
                <span className="burad-t t3">onlayn</span> <br />
                <span className="burad-t t4">istalgan nuqtadan</span>
              </div>
            </div>
            organing
          </div>
          <p className="hero__desc">
            Ozingizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni
            organing.
          </p>
        </div>
        <div className="hero__bottom">
          <a className="button button--light-green" to="/courses">
            <Link to={'/cources'}>
              <button className="button__inner">
              Kurslarni korish
            </button>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
