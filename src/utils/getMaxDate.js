import dayjs from 'dayjs';

const getMaxDate = (availableDay) => {
  const maxDate = dayjs(availableDay).add(15, 'day');
  return new Date(maxDate);
};
export default getMaxDate;
