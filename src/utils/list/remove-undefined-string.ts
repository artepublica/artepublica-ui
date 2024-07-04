function removeUndefinedString(value: unknown): value is string {
  return typeof value === 'string' && value != null;
}

export default removeUndefinedString;
