/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-11-09 17:54:06
 * @LastEditors: sy
 * @LastEditTime: 2023-11-09 18:00:43
 */
// Object.defineProperty() 方法来定义属性，并且可以使用 Object.getOwnPropertyDescriptor() 方法来获取属性的描述符。
let obj = {
  a: "1",
  b: "2",
};
Object.prototype.c = function () {
  console.log("3");
};

for (var key in obj) {
  console.log(key);
}

let desc = Object.getOwnPropertyDescriptor(Object.prototype, "c");
console.log(desc);
/*
{
  value: [Function (anonymous)],
  writable: true,
  enumerable: true,
  configurable: true
  //在 ES6 的对象属性描述符中，configurable 表示该属性是否可配置，即能否删除该属性、能否修改该属性的属性描述符。 configurable 为 true 时，属性可配置；configurable 为 false 时，属性不可配置，此时会抛出异常。 默认情况下，所有属性的 configurable 值都为 true
}
*/

// 因为c 可遍历，所以会输出
