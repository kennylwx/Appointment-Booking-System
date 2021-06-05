import { listOfDays, listOfMonths } from '../data';

const normaliseDateToReadableString = (d) => {
  const month = d.getMonth();
  const date = d.getDate();
  const day = d.getDay();
  const year = d.getFullYear();

  const result = `${listOfDays[day]} ${date} ${listOfMonths[month]} ${year} `;

  return result;
};

export default normaliseDateToReadableString;
