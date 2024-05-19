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
            <div id="gbkMainDecrease" class="activeTab">인구감소<img class="decrease_image" src={require("../images/decrease.png")} alt="decreasing icon"></img></div>
            <div id="gbkMainOld">초고령사회 진입<img class="oldman_image" src={require("../images/old_man.png")} alt="old man icon"></img></div>
            <div id="gbkMainAnimationDecrease" class="activeAnimation">
              51,751,065 명
            </div>
            <div id="gbkMainAnimationOld">
              182<span id="Days">Days</span> 07:03:28:98
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
      <div id="decreaseModal">
        <span>인구감소는 이렇게 계산했어요</span>
        <span>대한민국 인구는 2024년 대비 2072년 15,528,772명이 줄어든다고 해요. 즉, 1분 37.48초에 1명 씩 인구가 줄어드는 거에요.</span>
        <span>※ 이 계산은 출산인구 감소에 따른 인구감소 가속화를 고려하지 않은 단순계산으로 정확한 계산이 아니에요.</span>
        <span>출처: KOSIS 국가통계포털 인구로보는대한민국</span>
      </div>
      <div id="oldModal">
        <span>초고령사회 진입은 이렇게 계산했어요</span>
        <span>초고령사회란 전체 인구에서 65세 이상이 차지하는 비율이 20% 이상인 사회로, 대한민국은 2025년 초고령사회로 진입한다고 해요.</span> 
        <span>※ 초고령사회 진입은 고령인구 비율이 20.3%가 되는 2025년 7월 1일을 기준으로 계산했으며 정확한 계산이 아니에요.</span>
        <span>출처: KOSIS 국가통계포털 인구로보는대한민국</span>
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
