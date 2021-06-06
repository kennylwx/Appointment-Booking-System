const isObjectDateEqualToStringDate = (objDate, stringDate) => {
  if (Date.parse(objDate.toISOString()) < Date.parse(stringDate)) {
    return false;
  }

  return true;
};

export default isObjectDateEqualToStringDate;
