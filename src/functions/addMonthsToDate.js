const addMonthsToDate = (date, numOfMonth) => new Date(date.setMonth(date.getMonth() + numOfMonth));

export default addMonthsToDate;
