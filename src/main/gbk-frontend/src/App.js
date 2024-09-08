import './App.css';
import {Route, Routes} from 'react-router-dom'
import GbkMain from "./components/gbkMain";
import GbkBoard from "./components/gbkBoard.tsx";
import GbkFuture from "./components/gbkFuture.tsx";
import GbkSave from "./components/gbkSave";
import React, { Component } from "react";


class App extends Component{
  constructor (props){
    super(props);
    
    this.state = {}
  }

render() {
    return (
      <div>
          <Routes>
            <Route exact path = "/" element={<GbkMain />} />
            <Route path="/board" element={<GbkBoard />} />
            <Route path="/future" element={<GbkFuture />} />
            <Route path="/save" element={<GbkSave />} />
          </Routes>  
      </div>
    );
  }
}

export default App;
