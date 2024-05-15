import React from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkMain.css'
import { Link } from 'react-router-dom';

// functional Component
function GbkMain() {

  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkMainAnimationContainer">
          <div id="gbkMainAnimationTab">
            <div id="gbkMainDecrease">인구감소<img class="decrease_image" src={require("../images/decrease.png")} alt="decreasing icon"></img></div>
            <div id="gbkMainOld">초고령사회 진입<img class="oldman_image" src={require("../images/old_man.png")} alt="old man icon"></img></div>
            <div id="gbkMainAnimation">
              51,751,065 명
            </div>
          </div>
        </div>
        <div class="contentsDivider"></div>
        <div id="gbkMainBoard">
          <div id="gbkMainBoardTitle">
            <div id="boardTitleBox"><Link id="boardTitle">게시판</Link></div>
            <div id="boardMoreBox"><Link id="boardMore">더보기 <i class="fa-solid fa-angle-right"></i></Link></div>
          </div>
          <div>
            <img class="Joan-Wiliams" src={require("../images/williams.jpg")} alt="Joan Williams said 'Korea is so screwed. Wow!'. You can link to board page."></img>
          </div>
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
