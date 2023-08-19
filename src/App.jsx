import { BrowserRouter as Router , Route , Routes} from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import Sign from "./pages/Sign";
import "./assets/css/normalize.css";


function App() {
 return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<Sign />} />
     </Routes>
    </Router>
    
    </>
  )
}

export default App
