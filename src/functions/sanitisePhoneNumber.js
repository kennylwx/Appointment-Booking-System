const sanitisePhoneNumber = (pNum) => pNum.replace(/[^\d]/g, '');

export default sanitisePhoneNumber;
