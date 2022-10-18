import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import getDay from 'date-fns/getDay';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

import { RiCalendarCheckFill } from 'react-icons/ri';
import { IoArrowBack } from 'react-icons/io5';
import { defaultTime, handleReservationTime, handleSelectedReservationTime } from '../../../utils/time';

import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

const FirstStep = ({ list, setStep }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(
    `${startDate.getFullYear().toString().slice(2, 4)}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
  );
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDayList, setSelectedDayList] = useState();
  const [timeList, setTimeList] = useState();

  const today = new Date();

  useEffect(() => {
    list && setSelectedDayList(list.filter((reservation) => reservation.date === selectedDay)[0]);
    list &&
      setSelectedTime(
        handleReservationTime(list.filter((reservation) => reservation.date === selectedDay))
          .map((timeEl) => timeEl.times.filter((el) => el.checked === true))
          .flat()[0].time,
      );
  }, []);

  useEffect(() => {
    setSelectedDay(
      `${startDate.getFullYear().toString().slice(2, 4)}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
    );
  }, [startDate]);

  useEffect(() => {
    list && setSelectedDayList(list.filter((reservation) => reservation.date === selectedDay)[0]);
  }, [selectedDay]);

  useEffect(() => {
    selectedDayList && selectedDayList.schedules
      ? setTimeList(handleReservationTime(selectedDayList.schedules))
      : setTimeList(defaultTime);
  }, [selectedDayList]);

  const handleSelectedTime = (e) => {
    setSelectedTime(e.target.id);
    selectedDayList?.schedules
      ? setTimeList(handleSelectedReservationTime(e.target.id, selectedDayList.schedules))
      : setTimeList(handleSelectedReservationTime(e.target.id, undefined));
  };

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
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
          filterDate={isWeekday}
          onChange={(date) => setStartDate(date)}
          locale='ko'
          popperPlacement='auto'
        />
      </div>
      <form className='formContainer'>
        {timeList &&
          timeList.map((timeEl) => {
            return (
              <div className='timeContainer' key={timeEl.timeZone}>
                <p>{timeEl.timeZone}</p>
                <div className='timeBox'>
                  {timeEl.times.map((timeWithDisabled) => {
                    return timeWithDisabled.disabled ? (
                      <div key={timeWithDisabled.time} className='radioBox'>
                        <input
                          type='radio'
                          name='time'
                          id={timeWithDisabled.time}
                          value={timeWithDisabled.time}
                          disabled
                          checked={timeWithDisabled.checked}
                        />
                        <label htmlFor={timeWithDisabled.time}>{timeWithDisabled.time}</label>
                      </div>
                    ) : (
                      <div key={timeWithDisabled.time} className='radioBox'>
                        <input
                          type='radio'
                          name='time'
                          id={timeWithDisabled.time}
                          value={timeWithDisabled.time}
                          onChange={handleSelectedTime}
                          checked={timeWithDisabled.checked}
                        />
                        <label htmlFor={timeWithDisabled.time}>{timeWithDisabled.time}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </form>
      <button className='btn' onClick={() => setStep(2)}>
        예약 하기
      </button>
    </Main>
  );
};
export default FirstStep;

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

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 10px 0 30px 0;
    height: inherit;
    border-radius: 0;

    .back {
      top: 0;
      left: 1%;
      svg {
        width: 2rem;
      }
    }

    .titleContainer {
      margin: 20px 0;
    }

    .date {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }

    .name {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }

    .timeBox {
      flex-direction: column;
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

    // react-date-picker 커스텀
    .react-datepicker {
      margin-top: -20px;
      border-radius: 15px;
      box-shadow: ${({ theme }) => theme.basicShadow};
      overflow: hidden;

      .react-datepicker__header {
        border: none;
      }

      .react-datepicker__current-month {
        padding: 5px 0;
        color: ${({ theme }) => theme.text};
      }

      .react-datepicker__navigation-icon--previous,
      .react-datepicker__navigation--next {
        margin-top: 5px;
      }

      .react-datepicker__day-name {
        color: ${({ theme }) => theme.text};
      }

      .react-datepicker__day {
        color: ${({ theme }) => theme.text};

        &:hover {
          border-radius: 50%;
          background-color: #ff696180;
        }
      }

      .react-datepicker__day--disabled {
        color: #ccc;

        &:hover {
          background-color: #fff;
        }
      }

      .react-datepicker__day--selected {
        border-radius: 50%;
        background-color: ${({ theme }) => theme.red};
        color: #fff;
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
