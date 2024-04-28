import './App.css';
import {Route, Routes} from 'react-router-dom'
import GbkMain from "./components/gbkMain";
import React from "react";

function App() {
  return (
    <div>
        <Routes>
          <Route exact path = "/" element={<GbkMain />} />
          <Route path="/board" element={<GbkMain />} />
        </Routes>  
    </div>
  );
}

export default App;
