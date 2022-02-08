---
title: slice
nav:
  path: /api
  title: api
---

```
  _.slice(array, [start = 0], [end = array.length])
```

slice()方法返回一个新的数组对象，这一对象是一个由`begin`和`end`决定的原数组的浅拷贝（包括begin，不包括end）。原数组不会被改变。


## 参数

  1. **array**(Array): 要裁剪的数组
  2. **[start = 0]**(number): 开始位置
  3. **[end = array.length]**(number): 结束位置

## 返回
  (Array): 返回裁剪部分得到的新数组。

## 例子

```js

const array = [1, 2, 3, 4]

_.slice(array, 2)
// => [3, 4]

```

