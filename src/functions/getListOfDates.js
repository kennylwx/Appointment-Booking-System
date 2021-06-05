// Returns an array of dates between the two dates
// from (https://gist.github.com/miguelmota/7905510)
const getListOfDates = (start, end) => {
  const arr = [];
  const dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};

export default getListOfDates;
