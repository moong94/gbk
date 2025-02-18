import React, { useEffect, useState } from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkBoard.css'
import axios from 'axios'

// functional Component
function GbkBoard() {

  const [isModalActive, setIsModalActive] = useState(false);
  
  const handleDocumentClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const getId = target.id;

    let getClassString: string ='';

    if (target instanceof SVGElement) {
      getClassString = target.className.baseVal; // SVG 요소 처리
    } else {
      getClassString = target.className as string; // 일반 HTML 요소 처리
    }

    console.log(`${getId}, ${getClassString}`);

    // 메인화면 탭 전환
    if (getClassString.includes('gbkBoardTab')) {
      if (getId === 'gbkBoardFavorite') {
        document.getElementById('gbkBoardAll')?.classList.remove('activeTab');
        document.getElementById('gbkBoardFavorite')?.classList.add('activeTab');
      } else if (getId === 'gbkBoardAll') {
        document.getElementById('gbkBoardFavorite')?.classList.remove('activeTab');
        document.getElementById('gbkBoardAll')?.classList.add('activeTab');
      }
    }

    // if (getId === 'modalContainer') {
    //   setIsModalActive(false);
    // }
  };
  // const [example,setExample] = useState([])

//   useEffect(() => {
//     axios.get('/users')
//     .then(response => {
//       console.log(response.data[0].userId);
//       setExample(response.data[0].userId);
//     })
//     .catch(error => console.log(error))
//   }, []
// );
  
  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkBoardContainer">
          <div id="gbkBoardContainerTab">
            <div id="gbkBoardAll" className="gbkBoardTab activeTab" onClick={handleDocumentClick}>전체</div>
            <div id="gbkBoardFavorite" className="gbkBoardTab" onClick={handleDocumentClick}>인기</div>
            
            
          </div>
        </div>
        <div id="gbkBoardContents">
          <div className="gbkBoardContentsTop">
            <div className="topImage">말풍선이미지</div>
            <div className="topUserInfo">
              <div className="topUserNickname">닉네임{/* {nickname} */}</div>
              <div className="topUserIP">(xxx.xxx){/* {ip} */}</div>
            </div>
            <div className="topCreationTime">작성시간</div>
          </div>
          <div className="gbkBoardContentsMain">
            <div className="mainTitle">글 제목</div>
            <div className="mainSubstring">글 내용 최대 두 줄</div>
            <div className="mainThumbnail">썸네일 이미지</div>
          </div>
          <div className="gbkBoardContentsBottom">
            <div className="bottomLike">좋아요</div>
            <div className="bottomComment">댓글</div>
            <div className="bottomShare">공유</div>
          </div>
              스크립트로 DB에 연동된 게시물 들 상위 10개 항목에 대해 순서대로 노출
        </div>
        <div id="gbkBoardSearch">
          검색영역
        </div>
        <div id="gbkBoardPagination">
          페이지네이션
        </div>

            {/* <div id="gbkMainBoard">
              게시판 컨텐츠  게시판 : {example} 
            </div> */}
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
