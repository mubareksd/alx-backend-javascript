const cleanSet = (set, startString) => {
  if (
    startString.length === 0
    || typeof set !== 'object'
    || typeof startString !== 'string'
  ) return '';
  const str = [];
  for (const item of set) {
    if (item.startsWith(startString)) str.push(item.slice(startString.length));
  }
  return str.join('-');
};

export default cleanSet;
