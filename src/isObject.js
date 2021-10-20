function isObject(value) {
  const type = typeof value;

  return value != null && (tyoe === 'object' || type === 'function')
}

export default isObject;