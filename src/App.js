import { useState, useEffect } from "react";
import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import ToolBoard from "./ToolBoard";
import ToolDetail from "./ToolDetail";

import TOOLS from "./tools";
import AboutPage from "./About";
import BasicTable from "./DataDisplay";

export default function App() {
  const navigate = useNavigate();

  const [allTools, setAllTools] = useState(TOOLS);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      navigate("/tools");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/tools" element={<ToolBoard allTools={allTools} />} />
        <Route path="/tool/:id" element={<ToolDetail allTools={allTools} />} />
        <Route path="/About" element={<AboutPage/>}  />
        <Route path="/millingData" element= {<BasicTable/>} />

        
      </Routes>
    </div>
  );
}
