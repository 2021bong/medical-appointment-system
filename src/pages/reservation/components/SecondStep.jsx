import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { RiCalendarCheckFill } from 'react-icons/ri';
import { reservationDay, reservationTime, name, phoneNumber } from '../../../atoms';
import { Main } from './SecondStep.styled';

const SecondStep = ({ setStep }) => {
  const [nameValue, setNameValue] = useRecoilState(name);
  const [phoneValue, setPhoneValue] = useRecoilState(phoneNumber);
  const [typeValue, setTypeValue] = useState('일반진료');
  const [year, month, day] = useRecoilValue(reservationDay).split('-');
  const time = useRecoilValue(reservationTime);

  const handleNextStep = () => {
    if (nameValue && phoneNumber) {
      /**
       * TODO
       * blackList 유저인지 확인 -> 서버에 기능 구현 필요
       */
      // if (
      //   blackList.filter((info) => info.name === nameValue).length !== 0 &&
      //   blackList.filter((info) => info.phoneNumber === phoneValue).length !== 0
      // ) {
      //   return window.alert('인터넷으로 예약이 불가한 고객입니다.\n병원으로 문의하시기 바랍니다.');
      // }
      /**
       * TODO
       * 서버로 유저 데이터 전송
       * 리액트 쿼리를 쓰면 이 컴포넌트 안에서 통신하고 다른 컴포넌트에서 내용을 쓸 수 있으려나...?
       * 리액트 쿼리로 통신 코드 분리 가능한지 확인(2step <-> 3step)
       *
       * + 성능 최적화
       */
      // setList((prev) => {
      //   let newList = [...prev];
      //   for (let i = 0; i < newList.length; i++) {
      //     if (newList[i].date === joinedDate) {
      //       newList[i].schedules.push({ id, time, name: nameValue, phoneNumber: phoneValue });
      //       return newList;
      //     }
      //   }
      //   newList.push({ date: date.join('-'), schedules: [{ id, time, name: nameValue, phoneNumber: phoneValue }] });
      //   return newList;
      // });
      setStep(3);
    } else {
      alert('이름과 전화번호를 모두 입력해주세요.');
    }
  };

  const setPhoneNumberValue = (e) => {
    if (e.target.value.length > 13) return;

    const regex = /[^0-9-]/g;
    if (regex.test(e.target.value)) return;

    setPhoneValue(e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
  };

  return (
    <Main>
      <div className='titleContainer'>
        <RiCalendarCheckFill size='2rem' />
        <h2>진료 예약</h2>
      </div>
      <div className='timeContainer'>
        <p>
          <b>예약 날짜 | </b>
          {`${year}년 ${month}월 ${day}일`}
        </p>
        <p>
          <b>예약 시간 | </b>
          {time}
        </p>
      </div>
      <p className='information mb30'>* 선택하신 일정을 확인해주세요.</p>
      <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
        <div className='alignContainer'>
          <label>이름</label>
          <input className='textInput' type='text' value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
        </div>
        <div className='alignContainer'>
          <div className='phoneNumberBox'>
            <label>휴대폰 번호</label>
            <input
              className='textInput'
              placeholder='숫자만 입력해주세요.'
              type='text'
              value={phoneValue}
              onChange={setPhoneNumberValue}
            />
          </div>
        </div>
        <div className='alignContainer'>
          <label className='inputTitle'>예약 종류</label>
          <ul className='listContainer' onChange={(e) => setTypeValue(e.target.id)}>
            <li className='typeList'>
              <input type='radio' id='일반진료' name='type' defaultChecked />
              <label htmlFor='일반진료'>일반진료</label>
            </li>
            <li className='typeList'>
              <input type='radio' id='정기검진' name='type' />
              <label htmlFor='정기검진'>정기검진</label>
            </li>
            <li className='typeList'>
              <input type='radio' id='정밀검사' name='type' />
              <label htmlFor='정밀검사'>정밀검사</label>
            </li>
            <li className='typeList'>
              <input type='radio' id='기타' name='type' />
              <label htmlFor='기타'>기타</label>
            </li>
          </ul>
        </div>
        <div className='alignContainer'>
          <label htmlFor='비고' className='inputTitle'>
            비고
          </label>
          <p className='information'>* 전달사항이 있다면 적어주세요.</p>
          <input className='textInput' type='text' id='비고' />
        </div>
      </form>
      <div className='btnContainer'>
        <button onClick={() => setStep(1)}>뒤로 가기</button>
        <button className='recommend' onClick={handleNextStep}>
          예약 하기
        </button>
      </div>
    </Main>
  );
};

export default SecondStep;
