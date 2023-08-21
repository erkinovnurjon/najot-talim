import { useState } from "react";
import { Link } from "react-router-dom";
import { Google } from "../../assets/Icon";

const Email = () => {
  const [email, setEmail] = useState(true);

  const handleEmailOptionClick = () => {
    setEmail(true);
  };

  const handlePhoneOptionClick = () => {
    setEmail(false);
  };

  return (
    <div className="loginpage">
      <div className="container">
     <div className="login">
         <div className="login-left">
        <img src="https://go.najottalim.uz/static/media/auth-illustration.2253fc4db7e7e500e1d5.png" alt="" />
       
      </div>
      <div className="login-right">
        <h1>Kirish</h1>
        <div className="login-wrapper">
            <div className="login-phone">
         <Link to={'/login'}>
            <span
            className={!email ? "active" : ""}
            onClick={handlePhoneOptionClick}
          >
            Telefon raqam orqali 
          </span>
         </Link>
          {/* <div className={`login-line ${!email ? "active" : ""}`}></div> */}
          
        </div>
        <div className="login-email">
          <Link to={'/login/email'}>
           <span
            className={email ? "active" : ""}
            onClick={handleEmailOptionClick}
          >
            Email pochta orqali 
          </span>
          </Link>
          {/* <div className={`login-line ${!email ? "active" : ""}`}></div> */}
        </div>
        </div>
        <form className="form-login">
            <div>
                  <h3>Elektron pochtangiz</h3>
                  <input type="email" name="email" placeholder="example@najottalimuz" id="" />
            </div>
            <div className="input-password">
                  <h3 > Parol</h3>
                  <input type="password" name="password" id="" placeholder="Parolingizni kiriting" />
            </div>
            <h4>
              Parolingizni unutdingizmi
            </h4>
            <div className="button-enter">
                  <button type="submit">KIRISH</button>
            </div>
            <div className="button-google">
                  <button>
                        <Google /> <span>Google Orqali</span>
                  </button>
            </div>
            <div className="royhat">
                  <h2>Profilingiz yoqmi?</h2>
                  <Link to={'/login/register'}>
                  <span>Royhatdan otish</span>
                  </Link>
            </div>
          
        </form>
      </div>
     </div>
      </div>
    </div>
  );
};

export default Email;


