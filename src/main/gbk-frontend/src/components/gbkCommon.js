import React from 'react'
import './gbkCommon.css';
import { Link } from 'react-router-dom';

// class Component

/* 공통영역-Header */
export class GbkHeader extends React.Component {

  constructor (props){
    super(props);

    this.state={
      isMenuActive : false
    };

  }

  mainSideMenu = () =>{
    this.setState(prevState=>({isMenuActive:true}));
  }

  mainSideMenuClose = () => {
    this.setState(prevState=>({isMenuActive:false}));
  }

  render(){
    return(
      <div id ="mainHeaderSticky">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
        <div id = "mainHeaderPosition">
          <div id="mainHeader">
            <h2 className="headerTitle"><Link to="/">Goodbye <span className="headerKorea">Korea</span></Link></h2>
            <div id="headerContents">
              <div id="saveKorea">
                <Link to="/save">
                  <i className="fa-regular fa-heart"></i> 대한민국 구하기
                </Link>
              </div>
              <div id="mainNavMenuBtn">
                <i className="fa-solid fa-bars" onClick={() => this.mainSideMenu()}></i>
              </div>
            </div>
          </div>
        </div>
        <div id="mainNavContainerBox" style={{display: this.state.isMenuActive ? "block" : "none"}} onClick={() => this.mainSideMenuClose()}></div>
        <div id="mainNavContainer" style={{display: this.state.isMenuActive ? "grid" : "none"}}>
          <div id="mainNavExcept" onClick={() => this.mainSideMenuClose()}></div>
          <div id="mainNavMenu">
          <i class="fa-solid fa-x menuXMark" onClick={() => this.mainSideMenuClose()}></i>
            <div className="linkText linkToBoard"><Link to="/board">게시판 <i className="fa-solid fa-angle-right"></i></Link></div>
            <div className="linkText linkToFuture"><Link to="/future">다가올 미래 <i className="fa-solid fa-angle-right"></i></Link></div>
            <div className="linkText linkToSave"><Link to="/save">대한민국 구하기 <i className="fa-solid fa-angle-right"></i></Link></div>
          </div>          
        </div>
      </div>  
      
    )
  }    
}

/* 공통영역 Footer */
export class GbkFooter extends React.Component {
  render(){
    return(
      <div>
        <div id="mainFooterPosition">
          <div id="mainFooter">
            <div id="vocMail">문의: clover1qq5@gmail.com</div>
            <div id="footerText">본 사이트에서 제공하는 정보는 홈페이지 제작자가 개인적으로 취합한 정보로 공식적인 근거 자료로 활용될 수 없습니다. 해당 정보 사용에 대한 책임은 전적으로 사용자에게 있습니다.</div>
          </div>
        </div>
      </div>  
    )
  }   
}


/* 공통영역 Menu Navigation */
export class GbkMenuNav extends React.Component {
  render(){
      return(
        <div>
          <div id="mainMenuNav"></div>
        </div>
      )
    }
  }