import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { GrSearchAdvanced } from 'react-icons/gr';

import { Main } from './Inquiry.styled';

const Inquiry = () => {
  const [searchType, setSearchType] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [phoneValue, setphoneValue] = useState('');
  const { pathname } = useLocation();

  const handleSearchType = (e) => {
    setSearchType(e.target.id === 'sType1' ? 1 : 2);
    setInputValue('');
    setphoneValue('');
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handlePhoneValue = (e) => {
    if (e.target.value.length > 13) return;

    const regex = /[^0-9-]/g;
    if (regex.test(e.target.value)) return;

    setphoneValue(e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
  };

  useEffect(() => {
    setInputValue('');
    setphoneValue('');
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
          <li className={searchType === 1 ? 'select' : undefined} id='sType1' onClick={handleSearchType}>
            개인 정보로 찾기
          </li>
          <li className={searchType === 2 ? 'select' : undefined} id='sType2' onClick={handleSearchType}>
            접수번호로 찾기
          </li>
        </ul>
        <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
          {searchType === 1 && (
            <div className='infoInputContainer'>
              <input
                type='text'
                placeholder='이름을 적어주세요.'
                className='searchInput'
                value={inputValue}
                onChange={handleInputValue}
              />
              <input
                type='text'
                placeholder='휴대폰번호를 적어주세요. (숫자만 입력해주세요.)'
                className='searchInput'
                value={phoneValue}
                onChange={handlePhoneValue}
              />
              <button className='btn infoBtn' onClick={onSearch}>
                검색
              </button>
            </div>
          )}
          {searchType === 2 && (
            <>
              <input
                type='text'
                placeholder='접수번호를 적어주세요.'
                className='searchInput'
                value={inputValue}
                onChange={handleInputValue}
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
