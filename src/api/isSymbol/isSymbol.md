---
title: isSymbol
nav:
  path: /api
  title: api
---

```
  _.isSymbol(value)
```

检查`value`是否是原始`Symbol`或者对象


## 参数

  1. **value**(*): 需要检查的值

## 返回
  (boolean): 如果`value`为一个symbol，那么返回`true`，否则返回`false`。

## 例子

```js
_.isSymbol(Symbol.iterator);
// => true

_.isSymbol('abc');
// => false
```

