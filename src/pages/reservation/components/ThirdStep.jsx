import { Link } from 'react-router-dom';
import { RiCalendarCheckFill } from 'react-icons/ri';

import { useRecoilState, useRecoilValue } from 'recoil';
import { reservationId, name, phoneNumber, type } from '../../../atoms';
import { Main } from './ThirdStep.styled';

const ThirdStep = () => {
  const id = useRecoilValue(reservationId);
  const typeValue = useRecoilValue(type);
  const [nameData, setNameDate] = useRecoilState(name);
  const [phoneNumberData, setPhoneNumberData] = useRecoilState(phoneNumber);

  const resetData = () => {
    setNameDate('');
    setPhoneNumberData('');
  };

  return (
    <Main>
      <div className='titleContainer'>
        <RiCalendarCheckFill size='2rem' />
        <h2>예약이 완료 되었습니다.</h2>
      </div>
      <div className='alignContainer'>
        <div className='dataContainer'>
          <p className='data'>
            <b>예약번호 </b> {id}
          </p>
          <p className='data'>
            <b>이름 </b> {nameData}
          </p>
          <p className='data'>
            <b>연락처 </b> {phoneNumberData}
          </p>
          <p className='data'>
            <b>예약 종류 </b> {typeValue}
          </p>
        </div>
        <p className='information'>이름이나 예약번호로 조회하실 수 있습니다.</p>
      </div>
      <Link to='/' onClick={resetData}>
        <button className='btn'>확인</button>
      </Link>
    </Main>
  );
};

export default ThirdStep;
