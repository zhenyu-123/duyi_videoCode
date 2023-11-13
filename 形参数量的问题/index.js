function A(a, b) {}
function B(a, b = 1) {
  console.log(arguments.length);
}

function C(a, ...args) {}
function D(b = 1, a) {}

console.log(A.length); //2
console.log(B.length); //1
console.log(C.length); //1
console.log(D.length); //0

// 函数名.length 代表函数所期望的参数个数

// 一个 Function 对象的 length 属性表示函数期望的参数个数，即形参的个数。这个数字不包括剩余参数，只包括在第一个具有默认值的参数之前的参数。相比之下，arguments.length 是局限于函数内部的，它提供了实际传递给函数的参数个数。

// MDN中文地址
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length
