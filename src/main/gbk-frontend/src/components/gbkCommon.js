import React from 'react'
import './gbkCommon.css';

// class Component

/* 공통영역-Header */
export class GbkHeader extends React.Component {
    render(){
        return(
          <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
            <div id = "mainHeaderPosition">
              <div id="mainHeader">
                <h2 class="headerTitle">Goodbye <span class="headerKorea">Korea</span></h2>
                <div id="headerContents">
                  <div id="saveKorea">
                    <i class="fa-regular fa-heart"></i> 대한민국 구하기
                  </div>

                  <div id="mainNavMenuBtn" onclick="openNavMenu()">
                    <i class="fa-solid fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
              <div id="mainNavMenu">
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
            <div id="mainFooter">
              <div id="vocMail">문의: clover1qq5@gmail.com</div>
              <div id="footerText">본 사이트에서 제공하는 정보는 홈페이지 제작자가 개인적으로 취합한 정보로 공식적인 근거 자료로 활용될 수 없습니다. 해당 정보 사용에 대한 책임은 전적으로 사용자에게 있습니다.</div>
            </div>
          </div>  
        )
    }
    
}