import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useEffect } from 'react';
import { useState } from 'react';
import { GrSearchAdvanced } from 'react-icons/gr';
import { FiUserCheck } from 'react-icons/fi';
import { AiOutlineFrown } from 'react-icons/ai';
import { Main } from './Inquiry.styled';

const Inquiry = ({ list }) => {
  const [filteredList, setFilteredList] = useState();
  const [nameSearch, setNameSearch] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    list && setFilteredList(list);
  }, []);

  const handleSearchType = (e) => {
    setNameSearch(e.target.id === 'nameSearch' ? true : false);
    setFilteredList(list);
    setInputValue('');
  };

  const handleInputText = (e) => {
    setInputValue(e.target.value);
  };

  const onSearch = () => {
    filteredList && nameSearch
      ? setFilteredList(() =>
          list.map((date) => {
            return {
              date: date.date,
              schedules: date.schedules.filter((reservation) => reservation.name === inputValue),
            };
          }),
        )
      : setFilteredList(() =>
          list.map((date) => {
            return {
              date: date.date,
              schedules: date.schedules.filter((reservation) => reservation.id === inputValue),
            };
          }),
        );
  };

  return (
    <Main>
      <Link to='/' className='back'>
        <IoArrowBack size='3rem' />
      </Link>
      <div className='titleContainer'>
        <GrSearchAdvanced size='2rem' />
        <h2>예약 내역 조회</h2>
      </div>
      <div className='searchContainer'>
        <ul className='searchBox'>
          <li className={nameSearch ? 'select' : undefined} id='nameSearch' onClick={handleSearchType}>
            이름으로 찾기
          </li>
          <li className={!nameSearch ? 'select' : undefined} id='idSearch' onClick={handleSearchType}>
            접수번호로 찾기
          </li>
        </ul>
        <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
          {nameSearch ? (
            <input
              type='text'
              placeholder='이름을 적어주세요.'
              className='searchInput'
              value={inputValue}
              onChange={handleInputText}
            />
          ) : (
            <input
              type='text'
              placeholder='접수번호를 적어주세요.'
              className='searchInput'
              value={inputValue}
              onChange={handleInputText}
            />
          )}
          <button onClick={onSearch}>검색</button>
        </form>
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
                <div key={timeSchedules.id} className='boderBottomBox'>
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
    </Main>
  );
};

export default Inquiry;
