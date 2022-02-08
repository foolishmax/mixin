---
title: pull
nav:
  path: /api
  title: api
---

```
  _.pull(array, values)
```

方法接受一个数组及要移除值集合或者数组，该方法不会改变原数组。


## 参数

  1. **array**(Array): 要裁剪的数组
  2. **[values]**(Array｜values): 要移除的值

## 返回
  (Array): 返回裁剪部分得到的新数组。

## 例子

```js

const array = [1, 2, 3, 4]

_.pull(array, 2, 4)
// => [1, 3, 4]

_.pull(array, [1, 3])
// => [2, 4]

```

