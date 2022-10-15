import { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

import { RiCalendarCheckFill } from 'react-icons/ri';
import { IoArrowBack } from 'react-icons/io5';
import { time } from '../../utils/time';

import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [reservationTime, setReservationTime] = useState();

  const today = new Date();

  const handleReservationTime = (e) => {
    setReservationTime(e.target.value);
  };

  return (
    <Main>
      <Link to='/' className='back'>
        <IoArrowBack size='3rem' />
      </Link>
      <div className='titleContainer'>
        <div className='title'>
          <RiCalendarCheckFill size='2rem' />
          <h2>진료 예약</h2>
        </div>
        <CustomDatePicker
          dateFormat='yyyy년 MM월 dd일'
          dateFormatCalendar='yy년 LL월'
          closeOnScroll={true}
          selected={startDate}
          minDate={today}
          maxDate={new Date(today.getFullYear(), today.getMonth() + 1, 15)}
          onChange={(date) => setStartDate(date)}
          locale='ko'
        />
      </div>
      <form className='formContainer'>
        {time.map((timeEl) => {
          return (
            <div className='timeContainer' key={timeEl.timeZone}>
              <p>{timeEl.timeZone}</p>
              <div className='timeBox'>
                {timeEl.times.map((time) => {
                  return time === '9:00' ? (
                    <div key={time} className='radioBox'>
                      <input
                        type='radio'
                        name='time'
                        id={time}
                        value={time}
                        defaultChecked
                        onChange={handleReservationTime}
                      />
                      <label htmlFor={time}>{time}</label>
                    </div>
                  ) : (
                    <div key={time} className='radioBox'>
                      <input type='radio' name='time' id={time} value={time} onChange={handleReservationTime} />
                      <label htmlFor={time}>{time}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </form>
      <button className='btn'>예약 하기</button>
    </Main>
  );
};

export default Reservation;

const CustomDatePicker = styled(DatePicker)`
  margin-bottom: 20px;
  padding: 8px 2px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  text-align: center;
  outline: none;
  box-shadow: ${({ theme }) => theme.basicShadow};
  cursor: pointer;
`;

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
  box-shadow: ${({ theme }) => theme.basicShadow};
  color: ${({ theme }) => theme.text};

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

  .titleContainer {
    margin-bottom: 10px;
    text-align: center;
    font-size: 26px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;

      svg {
        margin-right: 13px;
      }
      h2 {
        font-weight: 700;
      }
    }
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    font-size: 20px;

    .timeContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 15px;

      p {
        font-weight: 500;
      }

      &:first-child {
        margin-bottom: 20px;
        border-bottom: 1px solid #bbb;
      }

      .timeBox {
        display: flex;

        .radioBox {
          margin: 20px 10px;
        }
      }
    }
  }

  .btn {
    width: 25%;
    min-width: 280px;
    height: 3rem;
    background-color: inherit;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    color: inherit;
    box-shadow: ${({ theme }) => theme.basicShadow};

    &:hover {
      background-color: ${({ theme }) => theme.red};
      color: #fff;
      box-shadow: ${({ theme }) => theme.basicShadow};
    }
    &:active {
      background-color: ${({ theme }) => theme.red};
      color: #fff;
      box-shadow: ${({ theme }) => theme.activeShadow};
    }
  }
`;
