function onlyUniqueNotUndefinedString(
  value: string | undefined,
  index: number,
  self: (string | undefined)[],
): value is string {
  return value != null && self.indexOf(value) === index;
}

export default onlyUniqueNotUndefinedString;
