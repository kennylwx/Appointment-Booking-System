// Create Time with step 30 ["12:30", "13:00", "13:30",...] has to be 24hour format
const createTimeIntervals = (startTime, endTime, step) => {
  const MIN = 60;
  const arr = [];
  for (let k = startTime; k < endTime; k += 1) {
    for (let j = 0; j < (MIN / step); j += 1) {
      arr.push(`${k}:${j === 0 ? '00' : step * j}`);
    }
  }

  return arr;
};

export default createTimeIntervals;
