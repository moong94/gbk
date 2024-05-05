import React from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkFuture.css'

// functional Component
function GbkFuture() {

  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkMainAnimationTab">
          다가올 미래
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

export default GbkFuture;
