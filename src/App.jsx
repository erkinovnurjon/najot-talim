
import { BrowserRouter as Router , Route , Routes} from "react-router-dom";


import About from "./pages/About";

import Home from "./pages/Home";
import "./assets/css/normalize.css";
import "./assets/css/main.css";
import Blog from "./pages/Blog";
import Email from "./pages/loginpages/Email";
import Login from "./pages/loginpages/Login";
import Register from "./pages/loginpages/Register";
import RegEmail from "./pages/loginpages/RegEmail";

function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cources" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      
       <Route path="/login" element={<Login />} />
        <Route path="/login/email" element={<Email />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/login/register/email" element={<RegEmail />} />
     </Routes>
    </Router>
    

    </>
  );
}

export default App;
