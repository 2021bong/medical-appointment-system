import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { GrSearchAdvanced } from 'react-icons/gr';
import { FiUserCheck } from 'react-icons/fi';

const Inquiry = () => {
  const [list, setList] = useState();
  const [filteredList, setFilteredList] = useState();
  const [nameSearch, setNameSearch] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    axios('data/reservation.json').then((res) => {
      setList(res.data.reservations);
      setFilteredList(res.data.reservations);
    });
  }, []);

  const handleSearchType = (e) => {
    setNameSearch(e.target.id === 'nameSearch' ? true : false);
  };

  const handleInputText = (e) => {
    setInputValue(e.target.value);
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
        <form className='formContainer'>
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
          <button>검색</button>
        </form>
      </div>
      <ul className='listContainer'>
        {filteredList &&
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
          })}
      </ul>
    </Main>
  );
};

export default Inquiry;

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  margin: 5rem auto 0 auto;
  border-radius: 35px;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.basicShadow};

  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    font-size: 26px;
    text-align: center;

    svg {
      margin-right: 13px;
    }

    h2 {
      font-weight: 700;
    }
  }

  .searchContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-bottom: 30px;
    padding: 2rem;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 500;
    box-shadow: ${({ theme }) => theme.basicShadow};

    .searchBox {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      li {
        width: 100%;
        text-align: center;
        cursor: pointer;

        &:first-child {
          border-right: 2px solid #ccc;
        }

        &:active {
          color: ${({ theme }) => theme.red};
        }
      }
    }

    .select {
      color: ${({ theme }) => theme.red};
      font-weight: 700;
    }

    .formContainer {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        min-width: 80px;
        height: inherit;
        padding: 10px;
        border: none;
        border-radius: 0 5px 5px 0;
        font-weight: 500;
        box-shadow: ${({ theme }) => theme.basicShadow};

        &:active {
          box-shadow: ${({ theme }) => theme.activeShadow};
        }
      }

      .searchInput {
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        border: none;
        border-radius: 5px 0 0 5px;
        outline: none;
      }
    }
  }

  .back {
    position: absolute;
    top: 2%;
    left: 2%;
    border: none;
    color: ${({ theme }) => theme.text};

    &:active {
      color: ${({ theme }) => theme.red};
    }
  }

  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 50%;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.bg};
    border-radius: 15px;
    box-shadow: ${({ theme }) => theme.activeShadow};
    overflow: scroll;

    .boderBottomBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      padding: 30px 0;
      border-bottom: 1px solid #ccc;

      svg {
        margin-right: 15px;
      }

      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }

      .infoBox {
        div {
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .idNumber {
            display: inline-block;
            margin-right: 20px;
          }

          .date {
            margin-right: 20px;
          }

          .name {
            display: inline-block;
            margin-right: 20px;
          }
        }
      }
    }
  }
`;
