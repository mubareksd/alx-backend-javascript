const weakMap = new WeakMap();
let count = 1;

const queryAPI = (endPoint) => {
  weakMap.set(endPoint, count);
  count += 1;
  if (weakMap.get(endPoint) >= 5) {
    throw Error('Endpoint load is high');
  }
};

export { weakMap, queryAPI };
