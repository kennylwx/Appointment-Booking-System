// 21:30 => 30
const getMinuteFromString = (time) => time.substr(time.indexOf(':') + 1, time.length);
export default getMinuteFromString;
