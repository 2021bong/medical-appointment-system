import { atom } from 'recoil';

export const GlobalSelectedDay = atom({
  key: 'GlobalSelectedDay',
  default: '',
});

export const GlobalSelectedTime = atom({
  key: 'GlobalSelectedTime',
  default: '',
});

export const reservationId = atom({
  key: 'reservationId',
  default: '',
});

export const name = atom({
  key: 'name',
  default: '',
});

export const phoneNumber = atom({
  key: 'phoneNumber',
  default: '',
});

export const type = atom({
  key: 'type',
  default: '일반진료',
});
