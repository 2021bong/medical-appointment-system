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
    <>
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
    </>
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
