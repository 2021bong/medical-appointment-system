import dayjs from 'dayjs';

const checkHoliday = () => {
  const today = new Date();
  // 0 : sunday, 6 : saturday
  if (dayjs(today).day() === 0) {
    return dayjs(today).set('day', 1).format('YYYY-M-D');
  } else if (dayjs(today).day() === 6) {
    return dayjs(today).set('day', 2).format('YYYY-M-D');
  } else {
    return dayjs(today).format('YYYY-M-D');
  }
};

export default checkHoliday;
