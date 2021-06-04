const normaliseArrayToSentence = (input) => {
  const x = input.slice();
  const last = x.pop();

  const result = `${x.join(', ')} and ${last}`;
  return result;
};

export default normaliseArrayToSentence;
