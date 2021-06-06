// 21:30 => 21
// 09:30 => 9
const getHourFromString = (time) => {
  const res = time.substr(0, time.indexOf(':'));

  if (res[0] === '0') {
    return res.substr(1);
  }

  return res;
};

export default getHourFromString;
