import { useState } from "react";
import { Link } from "react-router-dom";
import { Google } from "../../assets/Icon";

const RegEmail = () => {
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
      <div className="login-right login-register">
        <h1>Royhatdan otish</h1>
        <div className="login-wrapper">
            <div className="login-phone">
         <Link to={'/login/register'}>
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
          <Link to={'/login/register/email'}>
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
                  <h3>Ismingiz</h3>
                  <input type="email" name="text" placeholder="Ismingizni kiriting" id="" />
            </div>
            <div>
                  <h3>Elektron pochtangiz</h3>
                  <input type="email" name="email" placeholder="example@najottalimuz" id="" />
            </div>
            <div className="input-password">
                  <h3 > Parol</h3>
                  <input type="password" name="password" id="" placeholder="Parolingizni kiriting" />
            </div>
            <div className="input-password">
                  <h3 > Parolni Tasdiqlash</h3>
                  <input type="password" name="password" id="" placeholder="Parolingizni qayta kiriting" />
            </div>
            <p className="login-p">
                  Agarda siz Ozbekistondan tashqarida istiqomat qilib telefon raqam orqali <br /> royxatdan otmoqchi bolsangiz,qollab-quvvatlash xizmatiorqali murojaat <br /> qilib telefon raqamni royxatdan otkazishingiz mumkin.
            </p>
            <div className="login-buttons">
                  <div className="button-enter">
                  <button type="submit">KIRISH</button>
            </div>
            <div className="button-google">
                  <button>
                        <Google /> <span>Google Orqali</span>
                  </button>
            </div>
            </div>
            <div className="royhat">
                  <h2>Royhatdan otganmisiz?</h2>
                  <Link to={'/login'}>
                    <span>Profilga kirish</span>
                  </Link>
            </div>
          
        </form>
      </div>
     </div>
      </div>
    </div>
  );
};

export default RegEmail;