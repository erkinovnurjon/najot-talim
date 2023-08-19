import { Link } from "react-router-dom";

const Cursorhover = () => {
  return (
    <>
      <div className="courses__hover">
        <ul className="breadcrumb">
          <li className="breadcrumb__link">
            <Link className="breadcrumb__link-item" href="/">
              Bosh sahifa
            </Link>
            <img
              className="breadcrumb__link-img"
              src="https://najottalim.uz/_next/static/media/arrow-breadcrumb.8858464b.svg"
              alt="img"
            />
          </li>

          <li className="breadcrumb__link">
            <Link className="breadcrumb__link-item" href="/about">
              Kurslar
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cursorhover