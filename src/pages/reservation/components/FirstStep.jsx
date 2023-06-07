import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import dayjs from 'dayjs';
import { registerLocale } from 'react-datepicker';
import getDay from 'date-fns/getDay';
import ko from 'date-fns/locale/ko';

import { RiCalendarCheckFill } from 'react-icons/ri';
import { IoArrowBack } from 'react-icons/io5';
import { defaultTime, makeAvailableTimeList } from '../../../utils/time';
import checkHoliday from '../../../utils/checkHoliday';
import getMaxDate from '../../../utils/getMaxDate';
import { reservationDay, reservationTime } from '../../../atoms';

import { Main, CustomDatePicker } from './FirstStep.styled';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

/**
 * TODO
 * 성능 최적화
 */

const FirstStep = ({ setStep }) => {
  const availableDay = new Date(checkHoliday());
  const [selectedDate, setSelectedDate] = useState(availableDay);
  const [recoilSelectedDate, setRecoilSelectedDate] = useRecoilState(reservationDay);
  const [selectedTime, setSelectedTime] = useRecoilState(reservationTime);
  const [timeList, setTimeList] = useState(defaultTime);
  const [serverDateList, setServerDateList] = useState();

  useEffect(() => {
    axios.get('/data/unavailableTime.json').then((data) => setServerDateList(data.data.unavailableTime));
  }, []);

  useEffect(() => {
    if (serverDateList) {
      const selectedDateString = dayjs(selectedDate).format('YY-M-D');
      const timeSchedules = serverDateList.filter((schedule) => schedule.date === selectedDateString);
      setTimeList(makeAvailableTimeList(timeSchedules));
      setRecoilSelectedDate(selectedDateString);
    }
  }, [selectedDate]);

  useEffect(() => {
    let checkedValue = '';
    const onlyTimesList = [...timeList[0].times, ...timeList[1].times];
    onlyTimesList.forEach((timeInfo) => {
      if (timeInfo.checked) checkedValue = timeInfo.time;
    });
    setSelectedTime(checkedValue);
  }, [timeList]);

  const handleSelectedTime = (e) => {
    const newTimeList = timeList.map((timeEl) => {
      return {
        timeZone: timeEl.timeZone,
        times: timeEl.times.map((time) =>
          e.target.id == time.time
            ? { time: time.time, disabled: time.disabled, checked: true }
            : { time: time.time, disabled: time.disabled, checked: false },
        ),
      };
    });
    setTimeList(newTimeList);
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
          selected={selectedDate}
          minDate={availableDay}
          maxDate={new Date(getMaxDate(availableDay))}
          filterDate={isWeekday}
          onChange={(date) => setSelectedDate(date)}
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
                  {timeEl.times.map((timeInfo) => {
                    return timeInfo.disabled ? (
                      <div key={timeInfo.time} className='radioBox'>
                        <input
                          type='radio'
                          name='time'
                          id={timeInfo.time}
                          value={timeInfo.time}
                          disabled
                          checked={timeInfo.checked}
                        />
                        <label htmlFor={timeInfo.time}>{timeInfo.time}</label>
                      </div>
                    ) : (
                      <div key={timeInfo.time} className='radioBox'>
                        <input
                          type='radio'
                          name='time'
                          id={timeInfo.time}
                          value={timeInfo.time}
                          onChange={handleSelectedTime}
                          checked={timeInfo.checked}
                        />
                        <label htmlFor={timeInfo.time}>{timeInfo.time}</label>
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
