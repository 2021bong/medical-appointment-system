export const time = [
  {
    timeZone: '오전',
    times: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
  },
  {
    timeZone: '오후',
    times: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
  },
];

export const findFirstTime = (reservation) => {
  if (!reservation) return '9:00';
  const allTime = [...time[0].times, time[1].times];
  const reservedTime = reservation.schedules.map((el) => el.time);
  for (let i = reservedTime.length; i >= 0; i--) {
    allTime.splice(allTime.indexOf(reservedTime[i]), 1);
  }
  console.log(allTime[0]);
  return allTime[0];
};
