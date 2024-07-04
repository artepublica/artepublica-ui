function onlyUniqueString(
  value: string,
  index: number,
  self: string[],
): boolean {
  return self.indexOf(value) === index;
}

export default onlyUniqueString;
