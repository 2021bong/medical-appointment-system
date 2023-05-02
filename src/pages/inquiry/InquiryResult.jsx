import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FiUserCheck } from 'react-icons/fi';
import { AiOutlineFrown } from 'react-icons/ai';
import { IoArrowBack } from 'react-icons/io5';
import { GrSearchAdvanced } from 'react-icons/gr';
import { Main } from './Inquiry.styled';

const InquiryResult = ({ list }) => {
  const [filteredList, setFilteredList] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    list && setFilteredList(list);
  }, []);

  return (
    <Main>
      <Link to='/inquiry' className='back'>
        <IoArrowBack size='3rem' />
      </Link>
      <div className='titleContainer'>
        <GrSearchAdvanced size='2rem' />
        <h2>예약 내역 조회</h2>
      </div>
      <ul className='listContainer'>
        {filteredList &&
          (filteredList.map((reservationData) => reservationData.schedules).flat().length === 0 ? (
            <div className='noResult'>
              <AiOutlineFrown size='5rem' />
              <p> 검색결과가 없습니다.</p>
              <p>검색어를 다시 확인해주세요.</p>
            </div>
          ) : (
            filteredList.map((reservationData) => {
              return reservationData.schedules.map((timeSchedules) => (
                <div key={timeSchedules.id} className='listItemBox'>
                  <FiUserCheck size='2rem' />
                  <li className='infoBox'>
                    <div>
                      <span className='idNumber'>
                        <b>예약 번호 | </b>
                        {timeSchedules.id}
                      </span>
                    </div>
                    <div>
                      <span className='date'>
                        <b>예약 날짜 | </b>
                        {`${timeSchedules.id.slice(0, 2)}년 ${timeSchedules.id.slice(2, 4)}월 ${timeSchedules.id.slice(
                          4,
                          6,
                        )}일`}
                      </span>
                      <span className='time'>
                        <b>예약 시간 | </b>
                        {timeSchedules.time}
                      </span>
                    </div>
                    <div>
                      <span className='name'>
                        <b>이름 | </b>
                        {timeSchedules.name.replace(timeSchedules.name[1], '*')}
                      </span>
                      <span className='phoneNumber'>
                        <b>전화번호 | </b>
                        {timeSchedules.phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}
                      </span>
                    </div>
                  </li>
                </div>
              ));
            })
          ))}
      </ul>
      <button className='btn backBtn' onClick={() => navigator('/')}>
        처음으로
      </button>
    </Main>
  );
};
export default InquiryResult;
