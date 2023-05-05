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

/***
 * @param {string[]} resevedTimeList
 * ['9:00', '10:30']
 */
export const makeAvailableTimeList = (resevedTimeList) => {
  if (!resevedTimeList || !resevedTimeList.length) {
    return defaultTime;
  }

  resevedTimeList = resevedTimeList[0].schedules;
  const filteredTimeList = defaultTime.map((timeEl) => {
    return {
      timeZone: timeEl.timeZone,
      times: timeEl.times.map((time) =>
        resevedTimeList.includes(time.time)
          ? { time: time.time, disabled: true, checked: false }
          : { time: time.time, disabled: false, checked: false },
      ),
    };
  });
  const defaultCheckInfo = { timeZone: 0, time: 0, find: false };
  for (let i = defaultCheckInfo.time; i < filteredTimeList[0].times.length; i++) {
    if (!filteredTimeList[0].times[i].disabled) {
      filteredTimeList[0].times[i].checked = true;
      defaultCheckInfo.find = true;
      break;
    } else if (!filteredTimeList[0].times[0].disabled && i === 0) {
      filteredTimeList[0].times[0].checked = false;
    }
  }
  if (!defaultCheckInfo.find) {
    defaultCheckInfo.timeZone = 1;
    for (let i = defaultCheckInfo.time; i < filteredTimeList[1].times.length; i++) {
      if (!filteredTimeList[1].times[i].disabled) {
        filteredTimeList[1].times[i].checked = true;
        break;
      }
    }
  }
  return filteredTimeList;
};
