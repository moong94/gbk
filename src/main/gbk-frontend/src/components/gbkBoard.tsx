import React from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkBoard.css'

// functional Component
function GbkBoard() {

  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkMainAnimationTab">
          게시판
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
