export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    return Error('Can not divide by zero');
  }
  return (numerator / denominator);
}
