const getAMPMFrm24Hrs = (time) => {
  // Check correct time format and split into components
  const tTime = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (tTime.length > 1) { // If time format correct
    const ttTime = tTime.slice(1); // Remove full string match value
    ttTime[5] = +ttTime[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    ttTime[0] = +ttTime[0] % 12 || 12; // Adjust hours
    return ttTime.join('');
  }
  return tTime.join(''); // return adjusted time or original string
};

export default getAMPMFrm24Hrs;
