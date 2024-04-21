import logo from './logo.svg';
import './App.css';
import GbkMain from "./components/gbkMain";
import React from "react";

function App() {
  return (
    <div className="gbk">
      <div className="gbk-main">
        {/* React에서 사용자 정의 컴포넌트는 대문자로 시작해야함. */}
        <GbkMain />
      </div>
    </div>
  );
}

export default App;
