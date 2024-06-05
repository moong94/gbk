import React from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkMain.css'
import { Link } from 'react-router-dom';

// functional Component
class GbkMain extends React.Component{

  constructor (props){
    super(props);

    this.state={}
  }

  // 컴포넌트가 마운트 될 때 이벤트 위임: document에 클릭 이벤트 리스너 추가
  componentDidMount(){
    document.addEventListener('click', this.handleDocumentClick);
  }

  // 컴포넌트가 unmount 될 때 이벤트 리스너를 제거하여 메모리 누수 방지
  componentWillUnmount(){
    document.removeEventListener('click', this.handleDocumentClick);
  }
  
  handleDocumentClick(event){
    const getId = event.target.id;
    const getClass = event.target.className;

    // 메인화면 탭 전환
    if(getClass.includes('gbkMainTab')){
      if(getId === 'gbkMainDecrease'){
        document.getElementById('gbkMainOld').classList.remove('activeTab');
        document.getElementById('gbkMainDecrease').classList.add('activeTab');
        document.getElementById('gbkMainAnimationDecrease').classList.add('activeAnimation');
        document.getElementById('gbkMainAnimationOld').classList.remove('activeAnimation');
      } else if(getId === 'gbkMainOld'){
        document.getElementById('gbkMainDecrease').classList.remove('activeTab');
        document.getElementById('gbkMainOld').classList.add('activeTab');
        document.getElementById('gbkMainAnimationOld').classList.add('activeAnimation');
        document.getElementById('gbkMainAnimationDecrease').classList.remove('activeAnimation');
      }
    }
  };

  render() {
  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkMainAnimationContainer">
          <div id="gbkMainAnimationTab">
            <div id="gbkMainDecrease" className="gbkMainTab activeTab">인구감소<img className="decrease_image" src={require("../images/decrease_opacity.png")} alt="decreasing icon"></img></div>
            {/* <div id="gbkMainOld" onClick={addActiveTab}>초고령사회 진입<img class="oldman_image" src={require("../images/old_man_opacity.png")} alt="old man icon"></img></div> */}
            <div id="gbkMainOld" className="gbkMainTab" >초고령사회 진입<img className="oldman_image" src={require("../images/old_man_opacity.png")} alt="old man icon"></img></div>
            <div id="gbkMainAnimationDecrease" className="activeAnimation">
              51,751,065 명
            </div>
            <div id="gbkMainAnimationOld">
              182<span id="Days"> Days</span> 07:03:28:98
            </div>
          </div>
        </div>
        <div className="contentsDivider"></div>
        <div id="gbkMainBoard">
          <div id="gbkMainBoardTitle">
            <div id="boardTitleBox"><Link id="boardTitle">게시판</Link></div>
            <div id="boardMoreBox"><Link id="boardMore">더보기 <i className="fa-solid fa-angle-right"></i></Link></div>
          </div>
          <div>
            <Link id="boardLinkImg">
              <img className="Joan-Wiliams" src={require("../images/williams.jpg")} alt="Joan Williams said 'Korea is so screwed. Wow!'. You can link to board page."></img>
            </Link>
          </div>
        </div>
      </div>
    {/*  <div id="modalContainer">
        <div id="decreaseModal" className="mainModal activeModal">
          <div className="modalSubTitle">
            <p className="modalSubTitleText">
              인구감소는 이렇게 계산했어요
            </p>
            </div>
          <div className="modalContents">
            <p className="modalContentsText">
              대한민국 인구는 2024년 대비 2072년 15,528,772명이 줄어든다고 해요.
              <p className="modalContentsRedText">
                즉, 1분 37.48초에 1명 씩 인구가 줄어드는 거에요.
              </p>
              <br />
              <br /> 
              ※ 이 계산은 출산인구 감소에 따른 인구감소 가속화를 고려하지 않은 단순계산으로 정확한 계산이 아니에요.
              <br />
              <br />
              출처: KOSIS 국가통계포털 인구로보는대한민국
            </p>
          </div>
          <div className="modalConfirmButton">
            확인
          </div>
        </div>
        <div id="oldModal" className="mainModal">
          <div className="modalSubTitle">
            <p className="modalSubTitleText">
              초고령사회 진입은 이렇게 계산했어요
            </p>
          </div>
          <div className="modalContents">
            <p className="modalContentsText">
              초고령사회란 전체 인구에서 65세 이상이 차지하는 비율이 20% 이상인 사회로, 
              <p className="modalContentsRedText">
              &nbsp;대한민국은 2025년 초고령사회로 진입한다고 해요.
              </p>
              <br /> 
              <br /> 
              ※ 초고령사회 진입은 고령인구 비율이 20.3%가 되는 2025년 7월 1일을 기준으로 계산했으며 정확한 계산이 아니에요.
              <br />
              <br />
              출처: KOSIS 국가통계포털 인구로보는대한민국
            </p>
          </div>
          <div className="modalConfirmButton">
            확인
          </div>
        </div>
      </div>
      */}
{/*       <div className="gbk-animation-tab">
         {this.gbk-animation}
      </div>
      <div className="gbk-board">
        게시판
      </div> */}
      <GbkFooter />
    </div>
  );
}
}

export default GbkMain;
