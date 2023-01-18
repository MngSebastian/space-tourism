import './App.css';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import Crew from "./components/Crew";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    <Router>

      <div className="w-screen  h-screen">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route path="/destination" element={<Destination />}/>
          <Route path="/crew" element={<Crew />}/>
        </Routes>
        {/* <Landing /> */}
      </div>
    </Router> 
  );
}

export default App;
