# Note | this

阅读： [掘金 |《嗨，你真的懂this吗？》](https://juejin.im/post/5c96d0c751882511c832ff7b)

---

Question - 控制台打印出来的值是什么？

```js
var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
console.log(window.number);
```
[→ 答案 +_+](#ANS)

---

- `this` 并非指向自身，它是一个指针，指向调用函数的对象；
- `this` 的绑定规则：默认绑定 / 隐式绑定/ 硬绑定 / new 绑定；

## 01 默认绑定

- 默认绑定：在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用；
- 非严格模式下，this 指向全局对象；
- 严格模式下，this 指向 undefined；

## 02 隐式绑定

- 若函数的调用是在某个对象上触发的，则会调用位置上存在的上下文对象 → 典型形式：obj.fn()
- 隐式绑定会把函数调用中的 `this` 绑定到这个上下文对象中；
- 只有最后一层会确定this指向的是什么；
- tips： 若obj.fn()前什么都没有，那么这肯定不是隐式绑定；

**隐式绑定大陷阱**：绑定容易丢失

## 03 硬/显式绑定

- 显式绑定：通过 `call`、`apply`、`bind` 的方式，显式指定 `this` 所指向对象；
- js中的每一个 `Function` 对象都有一个 `apply()` 方法和一个 `call()` 方法：
（调用一个对象的一个方法，用另一个对象替换当前对象）
```js
/* apply()方法 */
func.apply(thisObj[, argArray]);

/* call()方法 */
func.call(thisObj[, arg1[, arg2[, [,...argN]]]]);
```
- `bind()` 方法会创建一个新的函数，称为绑定函数, fun方法在 `this` 环境下调用：

```js
/* 该方法可传入两个参数，第一个作为this，第二个及以后参数则作为函数的参数调用 */
func.bind(this, arg1, arg2, ...);
```

## 04 new 绑定

- js中，构造函数只是使用 `new` 操作符时被调用的函数；
- 任何一个函数都可以使用 `new` 来调用，故不存在构造函数，而仅是对于函数的“构造调用”；
- 使用 `new` 来调用函数，会自动执行一下操作：
  1. 创建一个新对象；
  2. 将构造函数的作用域赋值给新对象，即：`this` 指向新对象；
  （前提：构造函数中没有返回对象或者是 `function` ，否则 `this` 指向这个对象或者是 `function`）
  3. 执行构造函数代码；
  4. 返回新对象；

## 绑定优先级

## 绑定例外

- 若将 `null` 或者是 `undefined` 作为 `this` 的绑定对象传入 `call`、 `apply` 或者是 `bind`，这些值在调用时会被忽略，实际应用的是默认绑定规则。

## 箭头函数

- 箭头函数是 ES6 中新增的，它和普通函数有一些区别，箭头函数没有自己的 `this`，它的 `this` 继承于外层代码库中的 `this`。
- 箭头函数在使用时，需要注意以下几点:
  1. 函数体内的 `this` 对象，继承的是外层代码块的 `this`；
  2. 不可以当作构造函数，也就是说，不可以使用 `new` 命令，否则会抛出一个错误；
  3. 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替；
  4. 不可以使用 `yield` 命令，因此箭头函数不能用作 `Generator` 函数；
  5. 箭头函数没有自己的 `this`，所以不能用 `call()`、 `apply()`、 `bind()` 这些方法去改变 `this` 的指向；

**箭头函数没有自己的 `this`，箭头函数中的 `this` 继承于外层代码库中的 `this`**

## QST - 如何正确判断this的指向？


<a name="ANS"></a>

=_= 答案：

```bash
10
9
3
27
20
undefined
```