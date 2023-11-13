/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-11-08 09:02:02
 * @LastEditors: sy
 * @LastEditTime: 2023-11-08 09:14:52
 */
// "use strict"
var a;
if (true) {
  console.log(a);
  a = 5;
  function a() {}
  function b() {}
  a = 0;
  console.log(a);
}
console.log(a);
console.log(b);
