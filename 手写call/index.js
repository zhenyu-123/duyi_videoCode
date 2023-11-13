/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-10-30 14:27:45
 * @LastEditors: sy
 * @LastEditTime: 2023-11-07 09:57:20
 */
//___________________________________________________________________call____________________________________________________________________________

/**
 * 
   在JavaScript中，call方法是所有函数对象都拥有的一个方法。它的主要作用是改变函数的调用上下文，也就是改变函数体内部this的指向。
   call方法接受的第一个参数是要作为this的对象，后面的参数是要传递给函数的参数。例如：

   ```
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

let person = { name: "Alice" };

greet.call(person); // 输出 "Hello, my name is Alice"
```

在这个例子中，greet函数的this被call方法改变为person对象，所以函数内部的this.name就是person.name。

如果不使用call方法，this通常指向全局对象（在浏览器中是window），或者在严格模式下是undefined。
 */

//___________________________________________________________________Object.defineProperty()____________________________________________________________________________

/**
 Object.defineProperty() 是一个 JavaScript 方法，用于直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。

在你的代码中，Object.defineProperty() 方法接收三个参数：

1. ctx：要在其上定义属性的对象。
2. key：要定义或修改的属性的名称。
3. 描述符对象：这个对象描述了属性的特性。它可以包含以下字段：
- value：属性的值。在你的代码中，这个值是 this。
- enumerable：如果为 true，则该属性出现在对象的枚举属性中。在你的代码中，这个值是 false，所以 key 属性不会出现在枚举中。
- writable：如果为 true，则该属性的值可以被改变。在你的代码中，这个值是 true，所以 key 属性的值可以被改变。
- configurable：如果为 true，则该属性的类型可以被改变，该属性也可以从所属对象中删除。在你的代码中，这个值是 true，所以 key 属性可以被删除或改变其类型。

let obj = {};

Object.defineProperty(obj, 'property1', {
  value: 42,
  writable: false
});

console.log(obj.property1); // 输出：42

obj.property1 = 77;
// 抛出一个错误在严格模式下，因为属性是不可写的
console.log(obj.property1); // 输出：42
 */

//_________________________________________________________________globalThis______________________________________________________________________________

/**
 globalThis:ES11 新特性（2020）
 全局对象
 */
//_________________________________________________________________new Object() 和 Object()______________________________________________________________________________
/**
 * 
1. new Object()：这是使用构造函数创建新对象的常规方式。它会创建一个新的、空的对象。
2. Object()：如果没有参数，这个函数会创建一个新的、空的对象，就像 new Object() 一样。但是，如果你给 Object() 传递一个参数，它会尝试将这个参数转换为一个对象。
 */

Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
  var key = Symbol("temp");
  // 属性描述符号
  Object.defineProperty(ctx, key, {
    value: this, // 值
    enumerable: false, //key 属性不会出现在枚举中
  });
  ctx[key] = this;
  var result = ctx[key](...args);
  delete ctx[key];
  return result;
};

function method(a, b) {
  console.log(this, a, b);
  console.log(this.name);
  return a + b;
}
method.myCall({name:"小明"}, 1, 2);
method.call({name:"小明"}, 1, 2);
