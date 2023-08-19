import { BrowserRouter as Router , Route , Routes} from "react-router-dom"
import About from "./pages/About";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import "./assets/css/normalize.css";
import "./assets/css/main.css"
import Blog from "./pages/Blog";


function App() {
 return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cources" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Sign />} />
     </Routes>
    </Router>
    
    </>
  )
}

export default App
