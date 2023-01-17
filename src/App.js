import './App.css';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    <Router>

      <div className="w-screen  h-screen">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route path="/destination" element={<Destination />}/>
        </Routes>
        {/* <Landing /> */}
      </div>
    </Router> 
  );
}

export default App;
