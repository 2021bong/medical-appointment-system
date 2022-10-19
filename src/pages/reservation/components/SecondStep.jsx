import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { GlobalSelectedDay, GlobalSelectedTime, reservationId, name, phoneNumber, type } from '../../../atoms';
import { Main } from './SecondStep.styled';

const SecondStep = ({ setList, setStep }) => {
  const [blackList, setBlackList] = useState();
  const [nameValue, setNameValue] = useRecoilState(name);
  const [phoneValue, setPhoneValue] = useRecoilState(phoneNumber);
  const [, setTypeValue] = useRecoilState(type);
  const date = useRecoilValue(GlobalSelectedDay);
  const time = useRecoilValue(GlobalSelectedTime);
  const id = useRecoilValue(reservationId);

  const handleNextStep = () => {
    const joinedDate = date.join('-');
    if (nameValue && phoneNumber) {
      if (
        blackList.filter((info) => info.name === nameValue).length !== 0 &&
        blackList.filter((info) => info.phoneNumber === phoneValue).length !== 0
      ) {
        return window.alert('인터넷으로 예약이 불가한 고객입니다.\n병원으로 문의하시기 바랍니다.');
      }
      setList((prev) => {
        let newList = [...prev];
        for (let i = 0; i < newList.length; i++) {
          if (newList[i].date === joinedDate) {
            newList[i].schedules.push({ id, time, name: nameValue, phoneNumber: phoneValue });
            return newList;
          }
        }
        newList.push({ date: date.join('-'), schedules: [{ id, time, name: nameValue, phoneNumber: phoneValue }] });
        return newList;
      });
      setStep(3);
    } else {
      window.alert('이름과 전화번호를 모두 입력해주세요.');
    }
  };

  useEffect(() => {
    axios('data/blackList.json').then((res) => setBlackList(res.data.blackList));
  }, []);

  return (
    <Main>
      <div className='titleContainer'>
        <RiCalendarCheckFill size='2rem' />
        <h2>진료 예약</h2>
      </div>
      <div className='timeContainer'>
        <p>
          <b>예약 날짜 | </b>
          {`${date[0]}년 ${date[1]}월 ${date[2]}일`}
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
              type='text'
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          </div>
          <p className='information mb0'>* '-' 없이 번호만 입력해주세요.</p>
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
