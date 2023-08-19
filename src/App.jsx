import "./assets/css/normalize.css";
import { BrowserRouter as Router , Route , Routes} from "react-router-dom"
import About from "./pages/About";
import Sign from "./pages/Sign";
import Home from "./pages/Home";


function App() {
 return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign" element={<Sign />} />
     </Routes>
    </Router>
    
    </>
  )
}

export default App
