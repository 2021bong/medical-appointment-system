import { atom } from 'recoil';
import dayjs from 'dayjs';

const stringDate = dayjs(new Date()).format('YY-M-D');
export const reservationDay = atom({
  key: 'reservationDay',
  default: stringDate,
});

export const reservationTime = atom({
  key: 'reservationTime',
  default: '9:00',
});

export const name = atom({
  key: 'name',
  default: '',
});

export const phoneNumber = atom({
  key: 'phoneNumber',
  default: '',
});
