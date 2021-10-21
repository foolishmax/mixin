---
title: toInteger
nav:
  path: /api
  title: api
---

```
  _.toInteger(value)
```

转换`value`为一个整数


## 参数

  1. **value**(*): 要转换的值

## 返回
  (number): 返回转换后的整数。

## 例子

```js
_.toInteger(3.2);
// => 3

_.toInteger(Number.MIN_VALUE);
// => 0

_.toInteger(Infinity);
// => 1.7976931348623157e+308

_.toFinite('3.2');
// => 3
```

