import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [demo, setDemo] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setDemo(res.data);
            })
    }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div className="App">
            Goodbye : {demo}
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React asdfasdfasdfasdf
        </a>
      </header>
    </div>
  );
}

export default App;
