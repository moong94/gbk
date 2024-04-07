import logo from '../logo.svg';
import '../App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App1() {

  const [gbkMain, setGbkMain] = useState('');

    useEffect(() => {
        axios.post('/main')
            .then((res) => {
                setGbkMain(res.data);
            })
    }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div className="App">
            {gbkMain}
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactdd
        </a>
      </header>
    </div>
  );
}

export default App1;
