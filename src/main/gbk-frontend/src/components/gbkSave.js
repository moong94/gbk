import React, { useEffect, useState } from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkSave.css'



// functional Component
function GbkSave() {
  const petitionsUrl="https://www.naver.com";
  const kakaoUrl="https://qr.kakaopay.com/Ej8k7QOHq";

  const [toast, setToast] = useState(false);

  const copyAccpountNum = async (accountNumber) => {
    await navigator.clipboard.writeText(accountNumber);
    setToast(true);
  };
  
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast]);

  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="saveTopContents">
          <div id="koreanFlagContainer">
            
            {/* <img id="koreanFlagImg" src={require("../images/korean_flag.png")} alt="Korean Flag"></img> */}
            <div id="koreanFlagText">
              <div className="koreanFlagMainText">멸망해 가는 대한민국을 구해주세요</div>
              <div className="linkToPetitions"><a id="petitions" href={petitionsUrl} target="_blank" rel="noopener noreferrer">국민청원 참여하기 <i className="fa-solid fa-angle-right"></i></a></div>
            </div>
          
          </div>
        </div>
        <div className="contentsDivider"></div>
        <div id="saveBottomContents">
          <div className="saveBottomTitle">후원안내</div>
          <div className="saveBottomText">후원해주신 금액은 대한민국 인구감소 문제해결에 사용됩니다.</div>
          <div className="saveBottomAccountInfo">
            <div className="accountImg">계좌정보</div>
            <div className="accountNumber" onClick={() => copyAccpountNum("신한은행 110-389-199004")}>신한은행 110-389-199004<img className="copyImage" src={require('../images/copy_image.png')} alt="copy"></img></div>
            <div className="accountUserName">예금주 : 홍문기</div>
          </div>
          <div className="donateToKakao">
            <div className="kakaoPayImg"></div>
            <a className="linkToKakao" href={kakaoUrl} target="_blank" rel="noopener noreferrer">카카오페이로 후원하기</a>
          </div>
        </div>
      </div>
      {toast && (
      <div id="copyToastPopup" >
          계좌번호가 복사됐어요
        </div>
      )}
      <GbkFooter />
    </div>
  )
}

export default GbkSave;
