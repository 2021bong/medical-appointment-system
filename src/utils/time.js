export const defaultTime = [
  {
    timeZone: '오전',
    times: [
      { time: '9:00', disabled: false, checked: true },
      { time: '9:30', disabled: false, checked: false },
      { time: '10:00', disabled: false, checked: false },
      { time: '10:30', disabled: false, checked: false },
      { time: '11:00', disabled: false, checked: false },
      { time: '11:30', disabled: false, checked: false },
      { time: '12:00', disabled: false, checked: false },
      { time: '12:30', disabled: false, checked: false },
    ],
  },
  {
    timeZone: '오후',
    times: [
      { time: '14:00', disabled: false, checked: false },
      { time: '14:30', disabled: false, checked: false },
      { time: '15:00', disabled: false, checked: false },
      { time: '15:30', disabled: false, checked: false },
      { time: '16:00', disabled: false, checked: false },
      { time: '16:30', disabled: false, checked: false },
      { time: '17:00', disabled: false, checked: false },
      { time: '17:30', disabled: false, checked: false },
    ],
  },
];

export const handleReservationTime = (times) => {
  const disableTime = times.map((reservation) => reservation.time);
  const timeList = defaultTime.map((timeEl) => {
    return {
      timeZone: timeEl.timeZone,
      times: timeEl.times.map((time) => {
        if (disableTime.includes(time.time)) {
          return { time: time.time, disabled: true, checked: false };
        } else {
          return { time: time.time, disabled: false, checked: false };
        }
      }),
    };
  });
  let smallI = timeList.length;
  let smallJ = timeList[0].times.length;
  for (let i = 0; i < timeList.length; i++) {
    for (let j = 0; j < timeList[i].times.length; j++) {
      if (!timeList[i].times[j].disabled) {
        if (i < smallI) {
          smallI = i;
          smallJ = j;
          if (smallI !== 0) {
            smallJ = j;
          }
        }
      }
    }
  }
  timeList[smallI].times[smallJ] = { ...timeList[smallI].times[smallJ], checked: true };
  return timeList;
};

export const handleSelectedReservationTime = (target, times) => {
  if (!times) {
    return defaultTime.map((timeEl) => {
      return {
        timeZone: timeEl.timeZone,
        times: timeEl.times.map((time) => {
          if (target === time.time) {
            return { time: time.time, disabled: false, checked: true };
          } else {
            return { time: time.time, disabled: false, checked: false };
          }
        }),
      };
    });
  }
  const disableTime = times.map((reservation) => reservation.time);
  const timeList = defaultTime.map((timeEl) => {
    return {
      timeZone: timeEl.timeZone,
      times: timeEl.times.map((time) => {
        if (disableTime.includes(time.time)) {
          return { time: time.time, disabled: true, checked: false };
        } else {
          if (target === time.time) {
            return { time: time.time, disabled: false, checked: true };
          } else {
            return { time: time.time, disabled: false, checked: false };
          }
        }
      }),
    };
  });
  return timeList;
};
