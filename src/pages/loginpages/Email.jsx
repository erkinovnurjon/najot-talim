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
                  <Link>
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


// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (email === "") {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }

//     if (password === "") {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             className={emailError ? "input-error" : ""}
//           />
//           {emailError && <p className="error-message">Email is required</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             className={passwordError ? "input-error" : ""}
//           />
//           {passwordError && <p className="error-message">Password is required</p>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
