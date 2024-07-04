function reduceListOfList<T>(previousValue: T[], currentValue: T[]): T[] {
  Array.prototype.push.apply(previousValue, currentValue);
  return previousValue;
}

export default reduceListOfList;
