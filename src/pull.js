function pull(array, ...removeList) {
  // 第二个参数支持values，或者数组
  const removeSet = new Set(removeList.flat(Infinity));

  return array.filter(function(item) {
    return !removeSet.has(item);
  })
}

export default pull;