// 9:30 PM => 21:30
const get24HrsFrmAMPM = (timeStr) => {
  if (timeStr && timeStr.indexOf(' ') !== -1 && timeStr.indexOf(':') !== -1) {
    let hrs = 0;
    const tempAry = timeStr.split(' ');
    const hrsMinAry = tempAry[0].split(':');
    hrs = parseInt(hrsMinAry[0], 10);
    if ((tempAry[1] === 'AM' || tempAry[1] === 'am') && hrs === 12) {
      hrs = 0;
    } else if ((tempAry[1] === 'PM' || tempAry[1] === 'pm') && hrs !== 12) {
      hrs += 12;
    }
    return `${(`0${hrs}`).slice(-2)}:${(`0${parseInt(hrsMinAry[1], 10)}`).slice(-2)}`;
  }
  return null;
};

export default get24HrsFrmAMPM;
