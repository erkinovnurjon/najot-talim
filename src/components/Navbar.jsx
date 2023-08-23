import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <Link to={"/"}>
            <img
              className="navbar-logo"
              src="https://najottalim.uz/_next/static/media/logo-img.2935c262.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="nav-right">
          <Link to={"/cources"}>
            <span>Kurslar</span>
          </Link>
          <Link to={"/blog"}>
            <span>Blog</span>
          </Link>
          <Link to={"/login"}>
            <button>Kirish</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
