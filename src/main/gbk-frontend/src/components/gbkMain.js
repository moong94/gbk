import React from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkMain.css'
import { Link } from 'react-router-dom';

// functional Component
class GbkMain extends React.Component{

  constructor (props){
    super(props);

    this.state={
      isModalActive : false
    };
    
    // 메서드를 현재 인스턴스에 바인딩
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
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

    let getClassString;

    // SVGAnimatedString 객체인지 확인하고 문자열로 변환합니다.
    if (typeof getClass === 'object' && getClass.baseVal !== undefined) {
        getClassString = getClass.baseVal; // 또는 getClass.animVal
    } else if (typeof getClass === 'string') {
        getClassString = getClass;
    } else {
      console.error("클래스 이름을 읽을 수 없습니다.");
      return;
    }

    console.log(getId + "," + getClass);
    // 메인화면 탭 전환
    if(getClassString.includes('gbkMainTab')){
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

    if(getId === 'modalContainer'){
      this.setState({isModalActive:false});
    }
    console.log(getId + "," + getClass);
  };

  modalActive = (clickedAnimation) => {
    this.setState(prevState=>({isModalActive:true}));
    
    if(clickedAnimation === 'decrease'){
      document.getElementById('oldModal').classList.remove('activeModal');
      document.getElementById('decreaseModal').classList.add('activeModal');
    } else if (clickedAnimation === 'old'){
      document.getElementById('oldModal').classList.add('activeModal');
      document.getElementById('decreaseModal').classList.remove('activeModal');
    }
  }

  modalDeactive = () => {
    this.setState(prevState=>({isModalActive:false}));
  }

  render() {
  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkMainAnimationContainer">
          <div id="gbkMainAnimationTab">
            <div id="gbkMainDecrease" className="gbkMainTab activeTab">인구감소<img className="decrease_image" src={require("../images/decrease_opacity.png")} alt="decreasing icon"></img></div>
            <div id="gbkMainOld" className="gbkMainTab" >초고령사회 진입<img className="oldman_image" src={require("../images/old_man_opacity.png")} alt="old man icon"></img></div>
           <div id="gbkMainAnimationDecreaseContainer" className="activeAnimation" onClick={() => this.modalActive('decrease')}>
              <svg viewBox="0 0 532.33 120" id="gbkMainAnimationDecrease" className="activeAnimation" onClick={() => this.modalActive('decrease')}>
                <path stroke="#E5483D" className="rectPath" onClick={() => this.modalActive('decrease')}/>
                <text className="gbkMainAnimationDecreaseText">51,751,065 명</text>
              </svg>
            </div>
            <div id="gbkMainAnimationOld" onClick={() => this.modalActive('old')}>
              182<span class="smallText"> Days</span><br />
              07<span class="smallText">h</span>03<span class="smallText">m</span>28<span class="smallText">s</span>98<span class="smallText">ss</span>
            </div>
          </div>
        </div>
        <div className="contentsDivider"></div>
        <div id="gbkMainBoard">
          <div id="gbkMainBoardTitle">
            <div id="boardTitleBox"><Link to="/board">게시판</Link></div>
            <div id="boardMoreBox"><Link to="/board">더보기 <i className="fa-solid fa-angle-right"></i></Link></div>
          </div>
          <div>
            <Link to="/board">
              <img className="Joan-Wiliams" src={require("../images/williams.jpg")} alt="Joan Williams said 'Korea is so screwed. Wow!'. You can link to board page."></img>
            </Link>
          </div>
        </div>
      </div>
    <div id="modalContainer" style={{display: this.state.isModalActive ? "flex" : "none"}}>
        <div id="decreaseModal" className="mainModal">
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
          <div className="modalConfirmButton" onClick={() => this.modalDeactive()}>
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
          <div className="modalConfirmButton" onClick={() => this.modalDeactive()}>
            확인
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
  );
}
}

export default GbkMain;
