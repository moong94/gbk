import React from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkMain.css'

// functional Component
function GbkMain() {

  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkMainAnimationTab">
          애니메이션 탭 컨텐츠
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

export default GbkMain;
