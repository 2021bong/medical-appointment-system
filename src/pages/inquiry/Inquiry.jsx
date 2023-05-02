import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { GrSearchAdvanced } from 'react-icons/gr';

import { Main } from './Inquiry.styled';

const Inquiry = () => {
  const [infoSearch, setInfoSearch] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [birthValue, setBirthValue] = useState('');
  const { pathname } = useLocation();

  const handleSearchType = (e) => {
    setInfoSearch(e.target.id === 'infoSearch' ? true : false);
    setInputValue('');
    setBirthValue('');
  };

  const handleInputText = (e) => {
    setInputValue(e.target.value);
  };

  const handleBirthText = (e) => {
    const regex = /[^0-9]/g;
    if (regex.test(e.target.value)) {
      alert('숫자만 입력 가능합니다.');
      return;
    }
    if (e.target.value.length > 8) {
      return;
    }
    setBirthValue(e.target.value);
  };

  useEffect(() => {
    setInputValue('');
    setBirthValue('');
  }, [pathname]);

  /**
   * TODO
   * 1. 통신 코드 추가
   * 2. 검색 후 inquiry-result 페이지로 이동
   */
  const onSearch = () => {
    console.log('click onSearch Button!');
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
          <li className={infoSearch ? 'select' : undefined} id='infoSearch' onClick={handleSearchType}>
            개인 정보로 찾기
          </li>
          <li className={!infoSearch ? 'select' : undefined} id='idSearch' onClick={handleSearchType}>
            접수번호로 찾기
          </li>
        </ul>
        <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
          {infoSearch ? (
            <div className='infoInputContainer'>
              <input
                type='text'
                placeholder='이름을 적어주세요.'
                className='searchInput'
                value={inputValue}
                onChange={handleInputText}
              />
              <input
                type='text'
                placeholder='생년월일 8자리를 적어주세요. (예 : 19990101)'
                className='searchInput'
                value={birthValue}
                onChange={handleBirthText}
              />
              <button className='btn infoBtn' onClick={onSearch}>
                검색
              </button>
            </div>
          ) : (
            <>
              <input
                type='text'
                placeholder='접수번호를 적어주세요.'
                className='searchInput'
                value={inputValue}
                onChange={handleInputText}
              />
              <button className='btn' onClick={onSearch}>
                검색
              </button>
            </>
          )}
        </form>
      </div>
    </Main>
  );
};

export default Inquiry;
