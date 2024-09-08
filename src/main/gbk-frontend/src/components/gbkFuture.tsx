import React, { useState, useRef, useEffect } from 'react'
import { GbkFooter, GbkHeader } from './gbkCommon'
import './gbkFuture.css'

// functional Component
function GbkFuture() {
  const [selectedGender, setSelectedGender] = useState('male');
  const [year, setYear] = useState('1996년');
  const [month, setMonth] = useState('1월');
  const [day, setDay] = useState('1일');
  const [career, setCareer] = useState('만 3 년');
  const [pay, setPay] = useState('3000 만원');

  const [birthValid, setBirthValid] = useState(true);
  const [careerValid, setCareerValid] = useState(true);
  const [payValid, setPayValid] = useState(true);
  const [futureCountable, setFutureCountable] = useState(true);

  // const [isYearFocused, setIsYearFocused] = useState(false);
  // const [isMonthFocused, setIsMonthFocused] = useState(false);
  // const [isDayFocused, setIsDayFocused] = useState(false);
  // const [isCareerFocused, setIsCareerFocused] = useState(false);
  // const [isPayFocused, setIsPayFocused] = useState(false);
  const [futureBirthError, setFutureBirthError] = useState('');
  const [futureCareerError, setFutureCareerError] = useState('');
  const [futurePayError, setFuturePayError] = useState('');

  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleGenderClick = (gender, event) => {
    event.preventDefault();
    setSelectedGender(gender);
  };

  const monthInputRef = useRef<HTMLInputElement>(null);
  const dayInputRef = useRef<HTMLInputElement>(null);

  const handleYearChange = (event) => {
    const newValue = event.target.value;
    if (/^\d{0,4}$/.test(newValue)) {
      setYear(newValue);
    }
  };

  const handleMonthChange = (event) => {
    const newValue = event.target.value;
    if (/^\d{0,2}$/.test(newValue)) {
      setMonth(newValue);
    }
  };

  const handleDayChange = (event) => {
    const newValue = event.target.value;
    if (/^\d{0,2}$/.test(newValue)) {
      setDay(newValue);
    }
  };

  const handleCareerChange = (event) => {
    const newValue = event.target.value;
    if (/^\d{0,2}$/.test(newValue)) {
      setCareer(newValue);
    }
  };

  const handlePayChange = (event) => {
    const newValue = event.target.value;
    if (/^\d{0,10}$/.test(newValue)) {
      setPay(newValue);
    }
  };

  const handleYearBlur = () => {
    if (year.length === 4 && (parseInt(year) >= 1924 && parseInt(year) <= 2024) && !year.includes('년')) {
      setYear(parseInt(year) + '년');
      // setIsYearFocused(false);
      // if (monthInputRef.current) {
      //   monthInputRef.current.focus();
      // }
    }
    handleBirthErrorCheck();
  };

  const handleMonthBlur = () => {
    if (month.length > 0 && (parseInt(month) >= 1 && parseInt(month) <= 12) && !month.includes('월')) {
      setMonth(parseInt(month) + '월');
      // setIsMonthFocused(false);
      // if (dayInputRef.current) {
      //   dayInputRef.current.focus();
      // }
    }
    handleBirthErrorCheck();
  };

  const handleDayBlur = () => {
    if (day.length > 0 && (parseInt(day) >= 1 && parseInt(day) <= 31) && !day.includes('일')) {
      setDay(parseInt(day) + '일');
      // setIsDayFocused(false);
    }
    handleBirthErrorCheck();
  };

  const handleCareerBlur = () => {
    if (career.length > 0) {
      setCareer('만 ' + parseInt(career) + ' 년');
      // setIsCareerFocused(false);
    }
    handleCareerErrorCheck();
  };

  const handlePayBlur = () => {
    if (pay.length > 0) {
      setPay(parseInt(pay) + ' 만원');
      // setIsPayFocused(false);
    }
    handlePayErrorCheck();
  };

  const handleBirthErrorCheck = () => {
    // Extract only numbers from the year, month, and day
      const yearNumber = parseInt(year.replace(/\D/g, ''), 10);
      const monthNumber = parseInt(month.replace(/\D/g, ''), 10);
      const dayNumber = parseInt(day.replace(/\D/g, ''), 10);

      const validDate = new Date(yearNumber, monthNumber - 1, dayNumber);
      const today = new Date();
      // Validate the extracted values

      if ((validDate.getFullYear() === yearNumber && validDate.getMonth() === monthNumber - 1 && validDate.getDate() === dayNumber)
          && validDate <= today)
      // if (
      //   (yearNumber >= 1924 && yearNumber <= 2024) &&
      //   (monthNumber >= 1 && monthNumber <= 12) &&
      //   (dayNumber >= 1 && dayNumber <= 31) 
      // ) 
      {
        setFutureBirthError('');
        setBirthValid(true);
      } else {
        setFutureBirthError('올바른 생년월일을 입력해주세요.');
        setBirthValid(false);
      }
    }
  

  const handleFocus = (value, unit) => {
    // setIsFocused(true);
    if (value.endsWith(unit)) {
      const newValue = value.slice(0, -unit.length);
      // const newValue = '';
      switch (unit) {
        case '년':
          setYear(newValue);
          break;
        case '월':
          setMonth(newValue);
          break;
        case '일':
          setDay(newValue);
          break;
        case ' 년':
          setCareer(newValue.slice(2,));
          break;
        case ' 만원':
          setPay(newValue);
          break;
        default:
          break;
      }
    }
  };

  const handleCareerErrorCheck= () =>{
    const careerNumber = parseInt(career.replace(/\D/g, ''), 10);

    if (careerNumber >= 0){
      setFutureCareerError('');
      setCareerValid(true);
    } else{
      setFutureCareerError('경력이 몇 년차인지 입력하세요.');
      setCareerValid(false);
    }
  }

  const handlePayErrorCheck= () =>{
    const payNumber = parseInt(pay.replace(/\D/g, ''), 10);

    if (payNumber > 0){
      setFuturePayError('');
      setPayValid(true);
    } else{
      setFuturePayError('연봉을 입력해주세요.');
      setPayValid(false);
    }
  }

  useEffect(() => {
    if (birthValid && careerValid && payValid){
      setFutureCountable(true);
    } else{
      setFutureCountable(false);
    }
  },[birthValid, careerValid, payValid]);

  const handleGBKFutureResultClick = (event) => {
    event.preventDefault();
    if(futureCountable){
      setIsResultDisplayed(true);
    }
  };

  return (
    <div>
      <GbkHeader />
      <div id="container">
        <div id="gbkFutureContainer">
          <div id="gbkFutureTitle">
            청년 세금 폭탄 계산기
          </div>
          <div id="gbkFutureContents">인구가 줄면 내 세금은 올라간다!</div>
          <div id="gbkFutureMainContents">
            <form action="" method="post" id="gbkFutureMainForm">
              <div className="gbkFutureMainFormTitle">
                <div className="gbkFutureCategoryTitle">성별</div>
                <label htmlFor="sex">
                  <div id="sexSelectBox">
                    <button className={`selectBox ${selectedGender === 'male' ? 'selectedSelectBox' : ''}`} onClick={(event) => handleGenderClick('male', event)}>
                      <input type="radio" name="gender" value="male" required checked={selectedGender === 'male'} readOnly/>남자
                    </button>
                    <button className={`selectBox ${selectedGender === 'female' ? 'selectedSelectBox' : ''}`} onClick={(event) => handleGenderClick('female', event)}>
                      <input type="radio" name="gender" value="female" required checked={selectedGender === 'female'} readOnly/>여자
                    </button>
                  </div>
                </label>
                <div className='future-error'></div>
                <div  className="gbkFutureCategoryTitle">생년월일</div>
                <label htmlFor="birth" className="gbkFutureCategoryText gbkFutureBirth">
                  <input
                    type="text"
                    name="birthday"
                    id="birth-year"
                    onChange={handleYearChange}
                    onBlur={handleYearBlur}
                    onFocus={() => handleFocus(year, '년')}
                    value={year}
                    placeholder="YYYY"
                    maxLength={4}
                    pattern="\d*"
                  />
                  <p className='gbkFutureBirthSlash'>/</p>
                  <input
                    type="text"
                    name="birthday"
                    id="birth-month"
                    onChange={handleMonthChange}
                    onBlur={handleMonthBlur}
                    onFocus={() => handleFocus(month, '월')}
                    value={month}
                    placeholder="MM"
                    ref={monthInputRef}
                    maxLength={2}
                    pattern="\d*"
                  />
                  <p className="gbkFutureBirthSlash">/</p>
                  <input 
                    type="text" 
                    name="birthday" 
                    id="birth-day" 
                    onChange={handleDayChange} 
                    onBlur={handleDayBlur} 
                    onFocus={() => handleFocus(day, '일')} 
                    value={day} 
                    placeholder="DD" 
                    ref={dayInputRef} 
                    maxLength={2} 
                    pattern="\d*"
                  />
                  <div className='future-error'>{futureBirthError}</div>
                </label>
                <div className="gbkFutureCategoryTitle">학력</div>
                <label htmlFor="edu" className="gbkFutureCategoryText">
                  <select name="education" id="edu">
                    <option value="highSchool">고졸</option>
                    <option value="associate">전문대졸</option>
                    <option value="bachelor" selected>대졸</option>
                    <option value="master">석사</option>
                    <option value="doctorate">박사</option>
                  </select>
                </label>
                <div className='future-error'></div>
                <div className="gbkFutureCategoryTitle">직장</div>
                <label htmlFor="job" className="gbkFutureCategoryText">
                  <select name="workplace" id="job">
                    <option value="smallAndMedium" selected>중소기업</option>
                    <option value="midSize">중견기업</option>
                    <option value="largeSize">대기업</option>
                    <option value="stateOwned">공기업</option>
                    <option value="government">공무원</option>
                    <option value="solProprietor">개인사업자</option>
                    <option value="unemployment">무직</option>
                    <option value="etc">기타(프리랜서, 자영업자 등)</option>
                  </select>
                </label>
                <div className='future-error'></div>
                <div className="gbkFutureCategoryTitle">경력</div>
                <label htmlFor="career" className="gbkFutureCategoryText">
                  <input 
                    type="text"
                    name="careerYear"
                    id="career" 
                    onChange={handleCareerChange} 
                    onBlur={handleCareerBlur} 
                    onFocus={() => handleFocus(career, ' 년')} 
                    value={career}
                    required 
                    minLength={1} 
                    pattern="\d*"
                    placeholder='만으로 경력 입력'/>
                </label>
                <div className='future-error'>{futureCareerError}</div>
                <div className="gbkFutureCategoryTitle">연봉</div>
                <label htmlFor="pay" className="gbkFutureCategoryText">
                  <input 
                    type="text" 
                    name="payband" 
                    id="pay" 
                    onChange={handlePayChange} 
                    onBlur={handlePayBlur} 
                    onFocus={() => handleFocus(pay, ' 만원')} 
                    value={pay}
                    required 
                    minLength={1}
                    pattern="\d*"
                    placeholder='숫자 입력'/>
                </label>
                <div className='future-error'>{futurePayError}</div>
              </div>
            </form>
          </div>
          <button type="button" id="gbkFutureCountButton" className={`${futureCountable ? 'gkbFutureCountableButton' : 'gkbFutureNotCountableButton'}`} onClick={(event) => handleGBKFutureResultClick(event)}>계산하기</button>
          <div id="gbkFutureCountResult" style={isResultDisplayed ?{display:'block'}:{display:'none'}}>
            <div className="gbkFutureCountResultTitle">
              계산 결과
            </div>
            <div className="gbkkFutureCountResultText">
              <p>윗 세대가 생애소득 중 {}%를 세금으로 낼 때,</p>
              <p>나는 생애소득 {}원 중</p>
              <p>{}%인 {}원을 세금으로 내야해요.</p>
            </div>
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

export default GbkFuture;
