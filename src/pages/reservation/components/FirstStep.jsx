import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import getDay from 'date-fns/getDay';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

import { RiCalendarCheckFill } from 'react-icons/ri';
import { IoArrowBack } from 'react-icons/io5';
import { defaultTime, handleReservationTime, handleSelectedReservationTime } from '../../../utils/time';
import { GlobalSelectedDay, GlobalSelectedTime, reservationId } from '../../../atoms';

import { Main, CustomDatePicker } from './FirstStep.styled';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

const FirstStep = ({ list, setStep }) => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [selectedDay, setSelectedDay] = useState(
    `${startDate.getFullYear().toString().slice(2, 4)}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
  );
  const [, setRecoilDay] = useRecoilState(GlobalSelectedDay);
  const [, setRecoilTime] = useRecoilState(GlobalSelectedTime);
  const [, setRecoilId] = useRecoilState(reservationId);
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDayList, setSelectedDayList] = useState();
  const [timeList, setTimeList] = useState();

  useEffect(() => {
    list && setSelectedDayList(list.filter((reservation) => reservation.date === selectedDay)[0]);
  }, []);

  // useEffect(() => {
  //   setSelectedDay(
  //     `${startDate.getFullYear().toString().slice(2, 4)}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
  //   );
  // }, [startDate]);

  useEffect(() => {
    list && setSelectedDayList(list.filter((reservation) => reservation.date === selectedDay)[0]);
  }, [selectedDay]);

  useEffect(() => {
    selectedDayList && selectedDayList.schedules
      ? setTimeList(handleReservationTime(selectedDayList.schedules))
      : setTimeList(defaultTime);
  }, [selectedDayList]);

  useEffect(() => {
    timeList &&
      setSelectedTime(timeList.map((timeEl) => timeEl.times.filter((el) => el.checked === true)).flat()[0].time);
  }, [timeList]);

  useEffect(() => {
    setRecoilDay(selectedDay.split('-'));
    setRecoilTime(selectedTime);
    selectedTime &&
      setRecoilId(
        selectedDay.split('-').join('') +
          (selectedTime.length === 5
            ? selectedTime.slice(0, 2) + selectedTime.slice(3, 5)
            : '0' + selectedTime.slice(0, 1) + selectedTime.slice(2, 4)),
      );
  }, [selectedDay, selectedTime]);

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
          maxDate={new Date(today.getFullYear(), today.getMonth() + 1)}
          filterDate={isWeekday}
          onChange={(date) => setStartDate(date)}
          locale='ko'
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
