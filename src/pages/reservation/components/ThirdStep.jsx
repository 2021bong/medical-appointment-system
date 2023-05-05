import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { RiCalendarCheckFill } from 'react-icons/ri';
import { name, phoneNumber } from '../../../atoms';
import { Main } from './ThirdStep.styled';

const ThirdStep = () => {
  const [nameData, setNameData] = useRecoilState(name);
  const [phoneNumberData, setPhoneNumberData] = useRecoilState(phoneNumber);

  const resetData = () => {
    setNameData('');
    setPhoneNumberData('');
  };

  /**
   * TODO
   * 통신 성공 데이터에서 아이디와 진료유형 받아서 표시 -> 서버에 예약 번호 기능 생성 필요
   * 리액트 쿼리로 통신 코드 분리 가능한지 확인(2step <-> 3step)
   * 성능 최적화
   */

  return (
    <Main>
      <div className='titleContainer'>
        <RiCalendarCheckFill size='2rem' />
        <h2>예약이 완료 되었습니다.</h2>
      </div>
      <div className='alignContainer'>
        <div className='dataContainer'>
          <p className='data'>
            <b>예약번호 </b>
            {/* {id} */}
          </p>
          <p className='data'>
            <b>이름 </b>
            {nameData}
          </p>
          <p className='data'>
            <b>연락처 </b>
            {phoneNumberData}
          </p>
          <p className='data'>
            <b>예약 종류 </b>
            {/* {typeValue} */}
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
