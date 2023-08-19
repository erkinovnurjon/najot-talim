import "./assets/css/normalize.css";
import { BrowserRouter as Router , Route , Routes} from "react-router-dom"


function App() {
 return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About />} />
      <Route path="/" element={<Sign />} />
     </Routes>
    </Router>
    
    </>
  )
}

export default App
