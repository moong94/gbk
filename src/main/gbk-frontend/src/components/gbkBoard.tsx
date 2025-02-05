import React, { useEffect, useState } from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkBoard.css'
import axios from 'axios'

// functional Component
function GbkBoard() {

  const [example,setExample] = useState('')

  useEffect(() => {
    axios.get('/users')
    .then(response => setExample(response.data[0].userId))
    .catch(error => console.log(error))
  }, []
);
  
  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkMainAnimationTab">
          게시판 : {example}
        </div>
        <div id="gbkMainBoard">
          게시판 컨텐츠
        </div>
      </div>
{/*       <div className="gbk-animation-tab">
         {this.gbk-animation}
      </div>
      <div className="gbk-board">
        게시판
      </div> */}
      <GbkFooter />
    </div>
  )
}

export default GbkBoard;
