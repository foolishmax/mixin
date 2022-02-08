---
title: isObject
nav:
  path: /api
  title: api
---

```
  _.isObject(value)
```

检查`value`是否为`Object`。（例如：arrays,functions,objects,regexes,new Number(0),new String('')）

## 参数
  1.**value**(*):要检查的值。

## 返回
(boolean): 如果`value`为一个对象，那么返回`true`，否则返回`false`。

## 例子

```
_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false

```


